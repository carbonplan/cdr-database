import { memo } from 'react'
import { Text, Box, Grid } from 'theme-ui'
import { select } from 'd3-selection'
import { scaleLinear, scaleOrdinal, scaleLog } from 'd3-scale'
import { format } from 'd3-format'
import Chart from './chart'
import Tooltip from '../tooltip'

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
  setTooltips,
}) => {
  return (
    <Box sx={{ mt: [2], pt: [2], mr: ['24px'] }}>
      <Grid columns={['150px 1fr 16px']} sx={{ mb: [1] }}>
        <Text variant='label'>
          Volume
          <Text
            as='span'
            sx={{ ml: [2], textTransform: 'none', letterSpacing: 'body' }}
          >
            tCO₂
          </Text>
        </Text>
        <Text
          sx={{
            opacity: isNaN(bounds.volume[0]) ? 0 : 1,
            color: 'secondary',
            fontFamily: 'mono',
            fontSize: [1],
          }}
        >
          {!isNaN(bounds.volume[0]) &&
            format('.3~s')(bounds.volume[0].toFixed(0))}{' '}
          -{' '}
          {!isNaN(bounds.volume[1]) &&
            format('.3~s')(bounds.volume[1].toFixed(0))}
        </Text>
        <Tooltip
          value={'volume'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
      <Chart
        x={x1}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume}
        label='volume'
        setBounds={setBounds}
        ticks={[10, 100, 1000, 10000, 100000, 1000000]}
      />
      <Grid columns={['150px 1fr 16px']} sx={{ mt: [3], mb: [1] }}>
        <Text as='span' variant='label'>
          Permanence
          <Text
            as='span'
            sx={{ ml: [2], textTransform: 'none', letterSpacing: 'body' }}
          >
            years
          </Text>
        </Text>
        <Text
          sx={{
            opacity: isNaN(bounds.permanence[0]) ? 0 : 1,
            color: 'secondary',
            fontFamily: 'mono',
            fontSize: [1],
          }}
        >
          {!isNaN(bounds.permanence[0]) &&
            format('.3~s')(bounds.permanence[0].toFixed(0))}{' '}
          -{' '}
          {!isNaN(bounds.permanence[1]) &&
            format('.3~s')(bounds.permanence[1].toFixed(0))}
        </Text>
        <Tooltip
          value={'permanence'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
      <Chart
        x={x2}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.permanence}
        label='permanence'
        setBounds={setBounds}
        ticks={[1, 10, 100, 1000]}
      />
    </Box>
  )
}

export default memo(Charts)
