import { memo } from 'react'
import { Text, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { scaleLinear, scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'

const x1 = scaleLog()
    .domain([10, 1000000])
    .range([5, 365])
    .clamp(true)

const x2 = scaleLog()
    .domain([1, 1000])
    .range([5, 365])
    .clamp(true)

const y = scaleOrdinal()
  .domain(['forests', 'soil', 'biomass', 'ocean', 'mineralization', 'dac'])
  .range(Array(6).fill(0).map((_, i) => i * 15 + 10))

const Charts = ({ highlighted, filtered, data, setBounds }) => {
  return <Box sx={{mt: [3]}}>
    <Text variant='label'>
      Volume:
    </Text>
    <Chart 
      x={x1} 
      y={y} 
      highlighted={highlighted} 
      filtered={filtered} 
      data={data.volume} 
      label='volume' 
      setBounds={setBounds}
    />
    <Text variant='label'>
      Permanence:
    </Text>
    <Chart 
      x={x2} 
      y={y} 
      highlighted={highlighted} 
      filtered={filtered} 
      data={data.permanence} 
      label='permanence' 
      setBounds={setBounds}
    />
  </Box>
}

export default memo(Charts)