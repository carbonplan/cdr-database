/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Heading, Select } from 'theme-ui'
import CostVolume from './charts/cost-volume.js'
import Permanence from './charts/permanence.js'
import Negativity from './charts/negativity.js'
import { useState } from 'react'

const Summary = ( props ) => {
  
  const [chart, setChart] = useState('Cost vs. Volume');

  return (
    <Box sx={{ height: '55vh', p: [4] }}>
      <Heading sx={{ fontSize: [5] }}>
        charts
      </Heading>
      <Box>
      <select
        onChange={e => {
          setChart(e.target.value)
        }}
        sx={{
          variant: 'forms.select'
        }}
        defaultValue={chart}>
        <option>Cost vs. Volume</option>
        <option>Permanence</option>
        <option>Negativity</option>
      </select>
      <svg sx={{ 
        height: [30, null, 20], 
        width: [30, null, 20],
        ml: ['-24px'],
        mb: ['-3px'],
        pointerEvents: 'none'
      }}>
      <polygon points='3,3 19,3 11,16'
        sx={{
          fill: 'text', 
          stroke: 'text', 
          strokeWidth: 1, 
          transition: '0.25s all',
          transformOrigin: ['10px 8px'],
          transform: ['scale(0.8)']
        }} />
      </svg>
      </Box>
      {(chart == 'Cost vs. Volume') && <CostVolume projects={props.projects}> </CostVolume>}
      {(chart == 'Permanence') && <Permanence projects={props.projects}> </Permanence>}
      {(chart == 'Negativity') && <Negativity projects={props.projects}> </Negativity>}
    </Box>
  )
}

export default Summary
