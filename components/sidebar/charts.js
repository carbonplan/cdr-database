import { memo } from 'react'
import { Text, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { scaleLinear, scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'

const sx = {
  axisLabel: {
    color: 'muted',
    fontSize: [1],
    fontFamily: 'mono',
    position: 'absolute',
    ml: ['-8px']
  }
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

const Charts = ({ highlighted, filtered, data, setBounds }) => {
  return (
    <Box sx={{ mt: [3], pt: [2] }}>
      <Box sx={{ display: 'inline-block', mb: [1] }}>
        <Text variant='label'>
          Volume
          <Text
            as='span'
            sx={{ ml: [2], textTransform: 'none', letterSpacing: 'body' }}
          >
            tCO₂
          </Text>
        </Text>
      </Box>
      <Chart
        x={x1}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume}
        label='volume'
        setBounds={setBounds}
      />
      <Box sx={{position: 'relative', width: '370px', height: '25px'}}>
        <Text sx={{ ...sx.axisLabel, left: x1(10) }}>10</Text>
        <Text sx={{ ...sx.axisLabel, left: x1(100) }}>100</Text>
        <Text sx={{ ...sx.axisLabel, left: x1(1000) }}>1k</Text>
        <Text sx={{ ...sx.axisLabel, left: x1(10000) }}>10k</Text>
        <Text sx={{ ...sx.axisLabel, left: x1(100000) }}>100k</Text>
        <Text sx={{ ...sx.axisLabel, left: x1(1000000) }}>1M</Text>
      </Box>
      <Box sx={{ display: 'inline-block',  mt: [1], mb: [1] }}>
        <Text as='span' variant='label'>
          Permanence
          <Text
            as='span'
            sx={{ ml: [2], textTransform: 'none', letterSpacing: 'body' }}
          >
            years
          </Text>
        </Text>
      </Box>
      <Chart
        x={x2}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.permanence}
        label='permanence'
        setBounds={setBounds}
      />
      <Box sx={{position: 'relative', width: '370px', height: '25px'}}>
        <Text sx={{ ...sx.axisLabel, ml: ['-4px'], left: x2(1) }}>1</Text>
        <Text sx={{ ...sx.axisLabel, left: x2(10) }}>10</Text>
        <Text sx={{ ...sx.axisLabel, left: x2(100) }}>100</Text>
        <Text sx={{ ...sx.axisLabel, left: x2(1000) }}>1k</Text>
      </Box>
    </Box>
  )
}

export default memo(Charts)
