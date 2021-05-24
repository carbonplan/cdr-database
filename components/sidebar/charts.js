import { memo, useState } from 'react'
import { Box } from 'theme-ui'
import { scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'
import sx from '../styles'

const threshold = (d, min, max) => {
  return Math.max(Math.min(d, max), min)
}

const Charts = ({
  highlighted,
  filtered,
  data,
  bounds,
  setBounds,
  tooltips,
}) => {
  return (
    <Box sx={{ mt: [2, 2, 2, 3], pt: ['12px'] }}>
      <Box sx={{ ...sx.label, mb: [2], pb: ['6px'] }}>Filter by metrics</Box>
      <Chart
        x={[10 * 0.87, 1000000 * 1.15]}
        y={[-0.5, 5.5]}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume.map((d) => {
          return { ...d, value: threshold(d.value, 10, 1000000) }
        })}
        label='volume'
        tooltipLabel='volumeFilter'
        units='tCO₂'
        setBounds={setBounds}
        bounds={bounds.volume}
        ticks={[10, 100, 1000, 10000, 100000, 1000000]}
        tooltips={tooltips}
      />
      <Box sx={{ mt: [2, 2, 2, 3] }}>
        <Chart
          x={[1 * 0.92, 1000 * 1.09]}
          y={[-0.5, 5.5]}
          highlighted={highlighted}
          filtered={filtered}
          data={data.permanence
            .filter((d) => d.value !== 'N/A')
            .map((d) => {
              return { ...d, value: threshold(d.value, 1, 1000) }
            })}
          label='permanence'
          tooltipLabel='permanenceFilter'
          units='years'
          setBounds={setBounds}
          bounds={bounds.permanence}
          ticks={[1, 10, 100, 1000]}
          tooltips={tooltips}
        />
      </Box>
    </Box>
  )
}

export default memo(Charts)
