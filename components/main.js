import About from './about'
import Summary from './summary'
import Report from './report'
import { Box, Flex, Heading, Text } from 'theme-ui'
import { useSelector } from 'react-redux'
import Fuse from 'fuse.js';


const customFilter = (tags, search, projects) => {
  const options = {
    keys: ['name'],
    threshold: 0
  }

  if (!search && !tags) {
    return projects
  }

  if (search) {
    const fuse = new Fuse(projects, options)
    const searchProjects = fuse.search(search).map(project => project.item)
    if (tags.length) {
      return searchProjects.filter(project => project.tags.some(t => tags.includes(t)))
    } else {
      return searchProjects
    }
  } else {
    return projects.filter(project => project.tags.some(t => tags.includes(t)))
  }
}

const Main = ({ props }) => {
  const tags = useSelector(state => state.tags)
  const search = useSelector(state => state.search)
  const showProjects = customFilter(tags, search, props.projects)

  return (
    <Box sx={{ flexGrow: 99999, flexBasis: 0, minWidth: 'main' }}>
      <Flex>
        <Box sx={{ 
          flex: '1 1 auto', 
          borderStyle: 'solid', 
          borderColor: 'muted',
          borderWidth: '0px', 
          borderRightWidth: '1px',
          borderLeftWidth: '1px' 
        }}>
          <Box sx={{ py: [4], px: [4, 4, 3], maxWidth: '600px', margin: 'auto' }}>
            <Heading sx={{ fontSize: [5] }}>
              carbon reports
            </Heading>
            <Text sx={{ fontSize: [2], py: [4] }}>
              Each of these reports quantifies a particular carbon removal project —
              all metrics are based on publicly available information. Click
              triangles to see additional charts and explanations.
            </Text>
            { showProjects.map(project => (<Report project={ project } colors={ props.colors } key={ project.name }></Report>)) }
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, flexBasis: 'sidebar', display: ['none', 'none', 'block'] }}>
          <Box sx={{ position: 'sticky', top: 0 }} >
            <About></About>
            <Summary></Summary>
          </Box> 
        </Box>
      </Flex>
    </Box>
  )
}

export default Main