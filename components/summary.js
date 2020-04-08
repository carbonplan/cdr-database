import { Box, Heading } from 'theme-ui'
import CostVolume from './charts/cost-volume.js'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const Summary = ( props ) => {
  
  return (
    <Box
      sx={{
        height: '50vh',
        p: [4]
      }}
    >
      <Heading sx={{ fontSize: [5] }}>
        summary
      </Heading>
      <CostVolume projects={ props.projects }> </CostVolume>
    </Box>
  )
}

export default Summary
