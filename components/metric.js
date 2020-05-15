import Expander from './expander'
import Cycle from './graphics/cycle'
import Bar from './graphics/bar'
import Squares from './graphics/squares'
import Emissions from './graphics/emissions'
import Check from './icons/check'
import Question from './icons/question'
import Ex from './icons/ex'
import Exclamation from './icons/exclamation'
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
  const hasDetails = ((metric.claim != '') || (metric.comment != ''))

  const format = (key, value) => {
    if (value == 'N/A') return 'N/A'
    if (key == 'additionality') return ''
    if (key == 'transparency') return ''
    if ((key == 'permanence') && (value == 1000)) return '1000+'
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
    <Grid gap={['12px', '16px', '16px']} columns={
      ['50px 1fr 50px 37px', '50px 1fr 50px 37px', '75px 100px 1fr 120px 30px']
    }>
      <Text variant='metric.value' sx={{ color: theme.tags[tag] }}>
        {format(metric.name, metric.value)}
      </Text>
      <Box sx={{ display: ['none', 'none', 'inherit']}}>
        {(metric.name == 'mechanism') && <Emissions tag={tag} removal={metric.removal} avoided={metric.avoided} ></Emissions>}
        {(metric.name == 'volume') && <Bar tag={tag} data={metric.value} scale={scales['volume']}></Bar>}
        {(metric.name == 'permanence') && <Bar tag={tag} data={metric.value} scale={scales['permanence']}></Bar>}
        {(metric.name == 'negativity') && <Bar tag={tag} data={metric.value} scale={scales['negativity']}></Bar>}
        {(metric.name == 'cost') && <Bar tag={tag} data={metric.value} scale={scales['cost']}></Bar>}
        {(metric.name == 'additionality') && <Squares color={theme.tags[tag]} data={metric.value}></Squares>}
        {(metric.name == 'transparency') && <Squares color={theme.tags[tag]} data={metric.value}></Squares>}
      </Box>
      <Text>
        <Text variant='metric.label' sx={{ display: 'inline-block' }}>{metric.name}</Text>
        {(hasUnits) && <Text variant='metric.units' sx={{ display: 'inline-block' }}>{metric.units}</Text>}
      </Text>
      <Text>
        {(metric.rating === 1) && <Check color={theme.tags[tag]}/>}
        {(metric.rating === 0) && <Question color={theme.tags[tag]}/>}
        {(metric.rating === -1) && <Ex color={theme.tags[tag]}/>}
        {(metric.rating === -2) && <Exclamation color={theme.tags[tag]}/>}
      </Text>
      {hasDetails && 
        <Box sx={{  }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
    </Grid>
    {expanded && 
      <Box sx={{ 
        mt: ((metric.notes || metric.comment) ? [2] : [0] ),
        mb: ((metric.notes || metric.comment) ? [3] : [0] )
      }}>
      {(metric.notes) && 
        <Grid 
          gap={['4px', '4px', '16px']} 
          columns={[1, 1, '191px 1fr 30px']}
          sx={{ }}
        >
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['left', 'left', 'right'], 
            mr: [2],
            ml: ['61px', '61px', 0],
            mt: [1, 1, 0]
          }}>NOTES</Text>
          <Text variant='metric.comment' sx={{ 
            ml: ['61px', '61px', 0]
          }}>{metric.notes}</Text>
        </Grid>
      }
      <Box sx={{ 
        mt: ((metric.notes && metric.comment) ? [2] : [0] )
      }}>
      </Box>
      {(metric.comment) && 
        <Grid 
          gap={['4px', '4px', '16px']} 
          columns={[1, 1, '191px 1fr 30px']}
          sx={{ }}
        >
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['left', 'left', 'right'], 
            mr: [2],
            ml: ['61px', '61px', 0],
            mt: [1, 1, 0]
          }}>COMMENT</Text>
          <Text variant='metric.comment' sx={{ 
            ml: ['61px', '61px', 0]
          }}>{metric.comment}</Text>
        </Grid>
      }
      </Box>
    }
    <Divider sx={{ mr: [2] }}/>
  </Box>
}

export default Metric
