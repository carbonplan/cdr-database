import Expander from './expander'
import Cycle from './graphics/cycle'
import Bar from './graphics/bar'
import Squares from './graphics/squares'
import { Box, Divider, jsx, Grid, Text, IconButton } from 'theme-ui'
import { useState } from 'react'
import { useThemeUI } from 'theme-ui'

import scales from './graphics/scales'

const Metric = ({ metric, tag }) => {

  const [expanded, setExpanded] = useState(false)
  const context = useThemeUI()
  const theme = context.theme

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  const hasUnits = (metric.units != '')
  const hasDetails = (metric.comment != '')

  const format = (key, value) => {
    if (value == 'N/A') return 'N/A'
    if (key == 'additionality') return ''
    else if (key == 'cost') return '$' + parseFloat(value).toFixed(0)
    else if (key == 'negativity') return parseFloat(value).toFixed(2)
    else if (key == 'volume') {
      if (value < 1000) return value
      else if ((value >= 1000) && (value < 1000000)) return Math.round(value / 1000) + 'k'
      else if (value >= 1000000) return Math.round(value / 1000000) + 'M'
    }
    else return value
  }

  return <Box>
    <Grid gap={['12px', '16px', '16px']} columns={['20px 50px 1fr', '20px 50px 1fr', '75px 100px 1fr 30px']}>
      {hasDetails && 
        <Box sx={{ ml: ['-5px'], display: ['inherit', 'inherit', 'none'] }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
      {!hasDetails && 
        <Box sx={{ ml: ['-5px'], display: ['inherit', 'inherit', 'none'] }}>
        </Box>
      }
      <Text variant='metric.value' sx={{ color: theme.tags[tag] }}>
        {format(metric.name, metric.value)}
      </Text>
      <Box sx={{ display: ['none', 'none', 'inherit']}}>
        {(metric.name == 'volume') && <Bar tag={tag} data={metric.value} scale={scales['volume']}></Bar>}
        {(metric.name == 'permanence') && <Bar tag={tag} data={metric.value} scale={scales['permanence']}></Bar>}
        {(metric.name == 'negativity') && <Bar tag={tag} data={metric.value} scale={scales['negativity']}></Bar>}
        {(metric.name == 'cost') && <Bar tag={tag} data={metric.value} scale={scales['cost']}></Bar>}
        {(metric.name == 'additionality') && <Squares tag={tag} data={metric.value}></Squares>}
      </Box>
      <Text>
        <Text variant='metric.label' sx={{ display: 'inline-block' }}>{metric.name}</Text>
        {(hasUnits) && <Text variant='metric.units' sx={{ display: 'inline-block' }}>{metric.units}</Text>}
        {(metric.rating == 1) && <Text sx={{ display: 'inline-block', ml: [3], color: theme.tags[tag] }}>√</Text>}
        {(metric.rating == -1) && <Text sx={{ display: 'inline-block', ml: [3], color: theme.tags[tag] }}>x</Text>}
      </Text>
      {hasDetails && 
        <Box sx={{ display: ['none', 'none', 'inherit'] }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
    </Grid>
    {expanded && 
      <Box sx={{ pl: ['5px', '5px', '207px'] }}>
      {((metric.name == 'negativity') && (metric.kind != 'N/A')) && 
        <Text variant='metric.comment' sx={{ display: 'inline-block' }}>
          Total emissions are {metric.emissions} tCO2 for {metric.removal} tCO2 removed,
          based on {(metric.kind == 'ratio') ? 'technology parameters' : 'an instantiated project'}.
        </Text>
      }
      <Text variant='metric.comment'>{metric.comment}</Text>
      {(metric.name == 'volume') &&
        <Cycle tag={tag} data={metric.cycle}></Cycle>
      }
      </Box>
    }
    <Divider sx={{ mr: [2] }}/>
  </Box>
}

export default Metric
