import { Box, Heading, Select } from 'theme-ui'
import CostVolume from './charts/cost-volume.js'
import Permanence from './charts/permanence.js'
import Negativity from './charts/negativity.js'
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
      {(chart == 'Negativity') && <Negativity projects={props.projects}> </Negativity>}
    </Box>
  )
}

export default Summary
