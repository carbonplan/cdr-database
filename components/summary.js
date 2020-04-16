/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Heading, Select } from 'theme-ui'
import CostVolume from './charts/cost-volume.js'
import Permanence from './charts/permanence.js'
import Negativity from './charts/negativity.js'
import { useState } from 'react'

const Summary = ( props ) => {

  const [chart, setChart] = useState('COST VS VOLUME');

  return (
    <Box sx={{ height: '400px', px: [4], pt: [3] }}>
      <Box>
      <select
        onChange={e => {
          setChart(e.target.value)
        }}
        sx={{
          variant: 'forms.select'
        }}
        defaultValue={chart}>
        <option>COST VS VOLUME</option>
        <option>PERMANENCE</option>
        <option>NET NEGATIVITY</option>
      </select>
      <span sx={{ 
        ml: ['-15px'], 
        fontSize: [4], 
        display: 'inline-block', 
        transform: 'rotate(90deg)',
        pointerEvents: 'none',
        position: 'relative',
        top: '3px',
        color: 'secondary'
      }}>-></span>
      </Box>
      {(chart == 'COST VS VOLUME') && <CostVolume projects={props.projects}> </CostVolume>}
      {(chart == 'PERMANENCE') && <Permanence projects={props.projects}> </Permanence>}
      {(chart == 'NET NEGATIVITY') && <Negativity projects={props.projects}> </Negativity>}
    </Box>
  )
}

export default Summary
