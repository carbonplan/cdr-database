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
              <Text sx={{ fontSize: [2], py: [3], pr: [4] }}>
                Each of these reports quantifies a particular carbon removal project —
                all metrics are based on publicly available information. Click
                triangles to see additional charts and explanations.
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

// const Main = ({ props }) => {
//   return (
//     <Box sx={{ flexGrow: 99999, flexBasis: 0, minWidth: 'main' }}>
//       <Flex>
//         <Box sx={{ 
//           flex: '1 1 auto', 
//           borderStyle: 'solid', 
//           borderColor: 'muted',
//           borderWidth: '0px', 
//           borderRightWidth: '1px',
//           borderLeftWidth: '1px' 
//         }}>
//           <Box sx={{ py: [4], px: [4, 4, 2], maxWidth: '600px', margin: 'auto' }}>
//             <Heading sx={{ fontSize: [5] }}>
//               carbon reports
//             </Heading>
//             <Text sx={{ fontSize: [2], py: [4] }}>
//               Each of these reports quantifies a particular carbon removal project —
//               all metrics are based on publicly available information. Click
//               triangles to see additional charts and explanations.
//             </Text>
//             { props.projects.map(project => (<Report project={ project } key={ project.name }></Report>)) }
//           </Box>
//         </Box>
//         <Box sx={{ flexGrow: 1, flexBasis: 'chart', display: ['none', 'none', 'block'] }}>
//           <Box sx={{ position: 'sticky', top: 0 }} >
//             <Summary projects={ props.projects }></Summary>
//             <About></About>
//           </Box> 
//         </Box>
//       </Flex>
//     </Box>
//   )
// }

// export default Main