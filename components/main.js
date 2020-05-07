import Report from './report'
import Filter from './filter'
import { Box, Flex, Heading, Text } from 'theme-ui'

const Main = ({ props }) => {

  return (
    <Box>
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
          <Heading sx={{ fontSize: [7] }}>
            Carbon reports
          </Heading>
          <Text sx={{ fontSize: [2], py: [3], pb: [4], pr: [4] }}>
            This is a public database of reports on carbon removal project proposals. 
            All metrics are based on public information.
            Analysis aims to be transparent, standardized, and objective.
            Click the + to see details.
          </Text>
        </Box>
        <Filter></Filter>
        <Box>
        { props.projects
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(project => (<Report project={ project } key={ project.name }></Report>)) 
        }
        </Box>
      </Box>
    </Box>
  )
}

export default Main