import Metric from './metric'
import { Box } from 'theme-ui'

const Report = (props) => {
  var tags = props.project.tags.join('] [')

  return (
    <Box sx={{ 
      borderStyle: 'solid', 
      borderWidth: '1px', 
      borderColor: 'primary', 
      borderRadius: '6px',
      p: [3],
      mb: [4]
    }}>
      <li><b> {props.project.name}: </b> [<i>{tags}</i>]
        <ul> 
          {props.project.metrics.map(metric => (<Metric metric={metric}></Metric>))}
        </ul>
      </li>
    </Box>
  )
}

export default Report
