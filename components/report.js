import theme from '.././theme'
import Metric from './metric'
import { Badge, Grid, Box, Divider, Heading, Text } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useSelector } from 'react-redux'

const Report = (props) => {
  const id = props.project.project_id
  const visibility = useSelector(state => state.visibility[id])

  return <Box sx={{ 
    borderStyle: 'solid', 
    borderWidth: '1px', 
    borderColor: 'primary', 
    borderRadius: '6px',
    p: [3],
    mb: [4],
    display: visibility ? 'inherit' : 'none'
  }}>
    <Grid columns={[1, null, '1fr 200px']}>
      <Heading>{props.project.name}</Heading>
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
    <Text sx={{ fontSize: [2], py: [1] }}> 
      Direct air capture combined with mineralization for storage 
    </Text>
    <Divider />
    <Box>
      { props.project.metrics.map((metric) => <Metric key={metric.name} metric={metric}></Metric>) }
    </Box>
  </Box>
}

export default Report
