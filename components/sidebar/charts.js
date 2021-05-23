import { memo, useState } from 'react'
import { Box } from 'theme-ui'
import { scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'
import sx from '../styles'

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
      <Box sx={{ ...sx.label, mb: [2], pb: [1] }}>Filter by metrics</Box>
      <Chart
        x={[10, 1000000]}
        y={[-0.5, 5.5]}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume}
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
          x={[1, 1000]}
          y={[-0.5, 5.5]}
          highlighted={highlighted}
          filtered={filtered}
          data={data.permanence.filter((d) => d.value !== 'N/A')}
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
