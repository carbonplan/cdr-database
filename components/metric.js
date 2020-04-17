import Expander from './expander'
import Cycle from './metrics/cycle'
import { Box, Divider, jsx, Grid, Text, IconButton } from 'theme-ui'
import { useState } from 'react'
import { useThemeUI } from 'theme-ui'

const Metric = ({ metric, tag }) => {
  const [expanded, setExpanded] = useState(false)
  const context = useThemeUI()
  const theme = context.theme

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  const schema = {
    stock: {
      geological: true,
      land: null,
      ocean: null,
      material: null
    },
    flux: [
      {
        from: 'atmosphere',
        to: 'geological',
        type: 'enhanced'
      }
    ]
  }

  const hasUnits = (metric.units != null)

  return <div>
    <Grid columns={['30px 50px 1fr', '30px 50px 100px 1fr', '75px 100px 1fr 30px']}>
      <Box sx={{ ml: ['-5px'], display: ['inherit', 'inherit', 'none'] }}>
        <Expander toggle={toggle} expanded={expanded}></Expander>
      </Box>
      <Text variant='metric.value' sx={{ color: theme.tags[tag] }}>{metric.value}</Text>
      <Box sx={{ display: ['none', 'none', 'inherit']}}>graphic</Box>
      {hasUnits && <Text variant='metric.label'>{metric.name}
        <Text variant='metric.units' sx={{ display: 'inline-block' }}>{metric.units}</Text>
      </Text>}
      {!hasUnits && <Text variant='metric.label'>{metric.name}</Text>}
      <Box sx={{ display: ['none', 'none', 'inherit'] }}>
        <Expander toggle={toggle} expanded={expanded}></Expander>
      </Box>
    </Grid>
    {expanded && 
      <Box sx={{ pl: ['5px', '5px', '207px'] }}>
      <Text variant='metric.comment'> More details on metric go here.</Text>
      {(metric.name == 'Total project volume') &&
        <Cycle tag={tag} schema={schema}></Cycle>
      }
      </Box>
    }
    <Divider sx={{ mr: [2] }}/>
  </div>
}

export default Metric
