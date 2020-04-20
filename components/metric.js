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
  const hasDetails = (metric.name != 'cost')

  return <div>
    <Grid columns={['30px 50px 1fr', '30px 50px 100px 1fr', '75px 100px 1fr 30px']}>
      {hasDetails && 
        <Box sx={{ ml: ['-5px'], display: ['inherit', 'inherit', 'none'] }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
      {!hasDetails && 
        <Box sx={{ ml: ['-5px'], display: ['inherit', 'inherit', 'none'] }}>
        </Box>
      }
      <Text variant='metric.value' sx={{ color: theme.tags[tag] }}>{(metric.name != 'additionality') ? metric.value : ''}</Text>
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
        {(metric.rating > 0) && <Text sx={{ display: 'inline-block', ml: [3], color: theme.tags[tag] }}>√</Text>}
      </Text>
      {hasDetails && 
        <Box sx={{ display: ['none', 'none', 'inherit'] }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
    </Grid>
    {expanded && 
      <Box sx={{ pl: ['5px', '5px', '207px'] }}>
      <Text variant='metric.comment'>{metric.comment}</Text>
      {(metric.name == 'volume') &&
        <Cycle tag={tag} data={metric.cycle}></Cycle>
      }
      </Box>
    }
    <Divider sx={{ mr: [2] }}/>
  </div>
}

export default Metric
