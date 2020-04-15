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
      borderColor: 'muted',
      borderWidth: '0px', 
      borderBottomWidth: '1px',
      pr: [4],
      py: [4]
    }}>
      <Grid columns={[1, null, '1fr 300px']}>
        <Heading sx={{ mb: [2], fontSize: [4] }}>{props.project.name}</Heading>
        <Box sx={{ textAlign: ['left', null, 'right'] }}>
          {props.project.tags.map((tag) =>
            <Badge key={tag} variant='primary' sx={{ 
              borderColor: theme.tags[tag],
              color: theme.tags[tag],
              cursor: 'default',
              mr: [2],
              ml: [0, 0, 2]
            }}>
              {tag}
            </Badge>
          )}
        </Box>
      </Grid>
      <Grid columns={[1, null, '1fr 32px']}>
      <Text variant='description' sx={{ mb: [2] }}> 
        { props.project.description }
      </Text>
      <Box sx={{ ml: ['-5px', '-5px', '2px'] }}>
        <Expander toggle={toggle} expanded={expanded}></Expander>
      </Box>
      </Grid>
      <Box>
        {expanded && 
          <>
          <Divider sx={{ mr: [2] }}/>
          {props.project.metrics.map((metric) => 
            <Metric 
              key={metric.name} 
              tag={props.project.tags[0]} 
              metric={metric}
            ></Metric>) }
          </>
        }
      </Box>
    </Box>
  } else {
    return null
  }
}

export default Report
