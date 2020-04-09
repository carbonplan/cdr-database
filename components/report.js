import Metric from './metric'
import Expander from './expander'
import { Badge, Grid, Box, Divider, Heading, Text, IconButton } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useThemeUI } from 'theme-ui'

const Report = (props) => {
  const id = props.project.project_id
  const visibility = useSelector(state => state.visibility[id])
  const [expanded, setExpanded] = useState(false)

  const context = useThemeUI()
  const theme = context.theme

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  if (visibility) {
    return <Box sx={{ 
      borderStyle: 'solid', 
      borderWidth: '1px', 
      borderColor: 'primary', 
      borderRadius: '6px',
      p: [3],
      pr: [2],
      pb: [2],
      mb: [4]
    }}>
      <Grid columns={[1, null, '1fr 250px']}>
        <Heading sx={{ mb: [2] }}>{props.project.name}</Heading>
        <Box sx={{ textAlign: ['left', null, 'right'] }}>
          {props.project.tags.map((tag) =>
            <Badge key={tag} variant='primary' sx={{ 
              borderColor: theme.tags[tag],
              bg: alpha(theme.tags[tag], 0.4),
              cursor: 'default'
            }}>
              {tag}
            </Badge>
          )}
        </Box>
      </Grid>
      <Grid columns={[1, null, '1fr 32px']}>
      <Text sx={{ fontSize: [2] }}> 
        { props.project.description }
      </Text>
      <IconButton sx={{ cursor: 'pointer'}} onClick={toggle} aria-label='Toggle more info'>
        <Expander expanded={expanded}></Expander>
      </IconButton>
      </Grid>
      <Box>
        {expanded && 
          <>
          <Divider sx={{ mr: [2] }}/>
          {props.project.metrics.map((metric) => <Metric key={metric.name} metric={metric}></Metric>) }
          </>
        }
      </Box>
    </Box>
  } else {
  return null
}
}

export default Report
