import Metric from './metric'
import { Badge, Grid, Box, Divider, Heading, Text } from 'theme-ui'
import { alpha } from '@theme-ui/color'

const Report = (props) => {

  return (
    <Box sx={{ 
      borderStyle: 'solid', 
      borderWidth: '1px', 
      borderColor: 'primary', 
      borderRadius: '6px',
      p: [3],
      mb: [4]
    }}>
      <Grid columns={[1, null, '1fr 200px']}>
        <Heading>{props.project.name}</Heading>
        <Box sx={{ textAlign: ['left', null, 'right'] }}>
          {props.project.tags.map((tag) => 
            <Badge key={tag} variant='primary' sx={{ 
              borderColor: tag.toLowerCase(),
              bg: alpha(tag.toLowerCase(), 0.4),
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
        { props.project.metrics.map(metric => (<Metric metric={metric}></Metric>)) }
      </Box>
    </Box>
  )
}

export default Report
