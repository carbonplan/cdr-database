/** @jsx jsx */
import { memo, useState } from 'react'
import { jsx, useThemeUI, Text, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { scaleLinear, scaleOrdinal, scaleLog } from 'd3-scale'
import Points from './points'

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

const Charts = ({ highlighted, filtered, data }) => {
  const { theme } = useThemeUI()

  return <Box sx={{mt: [3]}}>
    <Text variant='label'>
      Volume:
    </Text>
    <Box sx={{width: '100%', display: 'block'}}>
      <svg width='370' height='100' sx={{display: 'block', my: [2]}}>
        <Points x={x1} y={y} theme={theme} highlighted={highlighted} filtered={filtered} data={data.volume} />
      </svg>
    </Box>
    <Text variant='label'>
      Permanence:
    </Text>
    <Box sx={{width: '100%', display: 'block'}}>
      <svg width='370' height='100' sx={{display: 'block', my: [2]}}>
        <Points x={x2} y={y} theme={theme} highlighted={highlighted} filtered={filtered} data={data.permanence} />
      </svg>
    </Box>
  </Box>
}

export default memo(Charts)