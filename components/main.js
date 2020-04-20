import Report from './report'
import Filter from './filter'
import { Box, Flex, Heading, Text } from 'theme-ui'

const Main = ({ props }) => {

  return (
    <Box sx={{ flexGrow: 99999, flexBasis: 0, minWidth: 'main' }}>
      <Flex>
        <Box sx={{ 
          flex: '1 1 auto'        
        }}>
          <Box sx={{ 
            py: [3],
            pb: [2], 
            mb: [3]
          }}>
            <Box sx={{
              borderStyle: 'solid', 
              borderColor: 'muted',
              borderWidth: '0px', 
              borderBottomWidth: '1px'
            }}>
              <Heading sx={{ fontSize: [6] }}>
                carbon reports
              </Heading>
              <Text sx={{ fontSize: [2], py: [3], pb: [4], pr: [4] }}>
                This is a public database of carbon removal projects. 
                Each report quantifies a project. All metrics are based on publicly available information,
                and all analysis is meant to be transparent, standardized, and objective.
                Click plus signs to see additional charts and explanations.
              </Text>
            </Box>
            <Filter></Filter>
            <Box>
            { props.projects.map(project => (<Report project={ project } key={ project.name }></Report>)) }
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Main