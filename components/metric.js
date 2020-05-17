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

  const Mobile = () => {
    return <Box>
      <Grid columns={['1fr 30px']}>
      <Text>
        <Text variant='metric.label' sx={{ display: 'inline-block' }}>{metric.name}</Text>
        {(hasUnits) && <Text variant='metric.units' sx={{ display: 'inline-block' }}>{metric.units}</Text>}
      </Text>
      {hasDetails && 
        <Box sx={{ ml: ['-5px'] }}>
          <Expander toggle={toggle} expanded={expanded}></Expander>
        </Box>
      }
      </Grid>

      <Text variant='metric.value' sx={{ 
        color: theme.tags[tag],
        textAlign: ['left'],
        fontSize: [4],
        mt: ['-2px']
      }}>
        {format(metric.name, metric.value)}
      </Text>
      <Box>
        {(metric.name == 'mechanism') && 
          <Text sx={{color: theme.tags[tag], fontFamily: 'monospace', letterSpacing: 'mono', fontSize: [4] }}>
            {(metric.removal && metric.avoided) ? 'REMOVAL + AVOIDED' : ''}
            {(metric.removal && !metric.avoided) ? 'REMOVAL ONLY' : ''}
            {(!metric.removal && metric.avoided) ? 'AVOIDED ONLY' : ''}
          </Text>
        }
        {(metric.name == 'additionality') && 
          <Text sx={{color: theme.tags[tag], fontFamily: 'monospace', letterSpacing: 'mono', fontSize: [4]}}>{metric.value}
          <Text sx={{color: 'text', display: 'inline-block'}}>/</Text>3
          </Text>
        }
        {(metric.name == 'transparency') && 
          <Text sx={{color: theme.tags[tag], fontFamily: 'monospace', letterSpacing: 'mono', fontSize: [4]}}>{metric.value}
          <Text sx={{color: 'text', display: 'inline-block'}}>/</Text>3
        </Text>
        }
      </Box>
      {expanded && 
        <Box sx={{ 
          mt: ((metric.notes || metric.comment) ? [3] : [0] ),
          mb: ((metric.notes || metric.comment) ? [3] : [0] )
        }}>
        {(metric.notes) && 
          <>
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['left', 'left', 'right'], 
            mr: [2],
            ml: [0],
            mt: [3]
          }}>NOTES</Text>
          <Text variant='metric.comment' sx={{ 
            ml: [0]
          }}>{metric.notes}</Text>
          </>
        }
        <Box sx={{ 
          mt: ((metric.notes && metric.comment) ? [2] : [0] )
        }}>
        </Box>
        {(metric.comment) && 
          <>
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['left', 'left', 'right'], 
            mr: [2],
            ml: [0],
            mt: [3]
          }}>COMMENT</Text>
          <Text variant='metric.comment' sx={{ 
            ml: [0]
          }}>{metric.comment}</Text>
          </>
        }
        </Box>
      }
      <Divider sx={{ mr: [0, 0, 2], mt: ['12px'] }}/>
    </Box>
  }

  return <Box>
    <Box sx={{ display: ['inherit', 'inherit', 'none'] }}>
      <Mobile/>
    </Box>
    <Box sx={{ display: ['none', 'none', 'inherit'] }}>
    <Grid gap={['16px']} columns={
      ['75px 100px 1fr 120px 30px']
    }>
      <Text variant='metric.value' sx={{ 
        color: theme.tags[tag],
        textAlign: ['left', 'left', 'right']
      }}>
        {format(metric.name, metric.value)}
      </Text>
      <Box>
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
        {(metric.rating === 0) && <Box/>}
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
          gap={['16px']} 
          columns={['191px 1fr 30px']}
          sx={{ }}
        >
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['right'], 
            mr: [2],
            ml: [0],
            mt: [0]
          }}>NOTES</Text>
          <Text variant='metric.comment' sx={{ 
            ml: [0]
          }}>{metric.notes}</Text>
        </Grid>
      }
      <Box sx={{ 
        mt: ((metric.notes && metric.comment) ? [2] : [0] )
      }}>
      </Box>
      {(metric.comment) && 
        <Grid 
          gap={['16px']} 
          columns={['191px 1fr 30px']}
          sx={{ }}
        >
          <Text variant='metric.comment' sx={{ 
            color: theme.tags[tag], 
            textAlign: ['right'], 
            mr: [2],
            ml: [0],
            mt: [0]
          }}>COMMENT</Text>
          <Text variant='metric.comment' sx={{ 
            ml: [0]
          }}>{metric.comment}</Text>
        </Grid>
      }
      </Box>
    }
    <Divider sx={{ mr: [2] }}/>
    </Box>
  </Box>
}

export default Metric
