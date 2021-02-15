import { memo, useState } from 'react'
import { Box } from 'theme-ui'
import { scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'

const sx = {
  axisLabel: {
    color: 'muted',
    fontSize: [1],
    fontFamily: 'mono',
    position: 'absolute',
    ml: ['-8px'],
  },
}

const x1 = scaleLog().domain([10, 1000000]).range([10, 360]).clamp(true)

const x2 = scaleLog().domain([1, 1000]).range([10, 360]).clamp(true)

const y = scaleOrdinal()
  .domain(['forests', 'soil', 'biomass', 'ocean', 'mineralization', 'dac'])
  .range(
    Array(6)
      .fill(0)
      .map((_, i) => i * 15 + 10)
  )

const Charts = ({
  highlighted,
  filtered,
  data,
  bounds,
  setBounds,
  tooltips,
}) => {
  return (
    <Box sx={{ mt: [2], pt: [2], mr: ['24px'], mb: ['24px'] }}>
      <Chart
        x={x1}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume}
        label='volume'
        units='tCO₂'
        setBounds={setBounds}
        bounds={bounds.volume}
        ticks={[10, 100, 1000, 10000, 100000, 1000000]}
        tooltips={tooltips}
      />
      <Chart
        x={x2}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.permanence}
        label='permanence'
        units='years'
        setBounds={setBounds}
        bounds={bounds.permanence}
        ticks={[1, 10, 100, 1000]}
        tooltips={tooltips}
      />
    </Box>
  )
}

export default memo(Charts)
