import Report from './report'
import Filter from './filter'
import { Box, Flex, Heading, Link, Text } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Main = ({ projects }) => {

  return (
    <Box>
      <Box sx={{ 
        py: [3],
        pb: [2], 
        mb: [3],
        borderStyle: 'solid', 
        borderColor: 'muted',
        borderWidth: '0px', 
        borderRightWidth: ['0px', '0px', '1px']
      }}>
        <Box sx={{
          borderStyle: 'solid', 
          borderColor: 'muted',
          borderWidth: '0px', 
          borderBottomWidth: '1px'
        }}>
          <Heading sx={{ fontSize: [7] }}>
            Project reports
          </Heading>
          <Text sx={{ fontSize: [3], py: [3], pb: [4], pr: [4] }}>
            This is a public database of reports on carbon removal project proposals. 
            These reports reflect our independent analysis of public information.
            Read more about our methods <NextLink href='/reports/methods'><a>
            <Text variant='link' sx={{ display: 'inline-block' }}>here</Text></a></NextLink>.
          </Text>
        </Box>
        <Filter></Filter>
        <Box>
        { projects
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(project => (<Report project={ project } key={ project.name }></Report>)) 
        }
        </Box>
      </Box>
    </Box>
  )
}

export default Main