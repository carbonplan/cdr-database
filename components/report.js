import Metric from './metric'
import Tag from './tag'
import { Badge, Box, Divider, Heading, Text } from 'theme-ui'

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
      <Heading> {props.project.name} {props.project.tags.map(tag => <Tag name={tag} key={ tag }> </Tag>)} </Heading>
      <Text sx={{ fontSize: [2], py: [1] }}> Direct air capture combined with mineralization for storage </Text>
      <Divider />
      <div>
        { props.project.metrics.map(metric => (<Metric metric={metric}></Metric>)) }
      </div>
    </Box>
  )
}

export default Report
