import { Box, Heading, Select } from 'theme-ui'
import CostVolume from './charts/cost-volume.js'
import Permanence from './charts/permanence.js'
import Lca from './charts/lca.js'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { useState } from 'react'

const Summary = ( props ) => {
  
  const [chart, setChart] = useState('Cost vs. Volume');

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
      <Select
        value={chart}
        onChange={e => {
          setChart(e.target.value)
        }}
        defaultValue={chart}>
        <option>Cost vs. Volume</option>
        <option>Permanence</option>
        <option>Negativity</option>
      </Select>
      {(chart == 'Cost vs. Volume') && <CostVolume projects={props.projects}> </CostVolume>}
      {(chart == 'Permanence') && <Permanence projects={props.projects}> </Permanence>}
      {(chart == 'Negativity') && <Lca projects={props.projects}> </Lca>}
    </Box>
  )
}

export default Summary
