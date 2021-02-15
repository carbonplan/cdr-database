import { useState, useEffect } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import Axis from './axis'
import TooltipToggle from '../tooltip/toggle'
import TooltipDescription from '../tooltip/description'

const Chart = ({
  x,
  y,
  highlighted,
  filtered,
  data,
  units,
  label,
  setBounds,
  bounds,
  ticks,
  tooltips,
}) => {
  const [tooltip, setTooltip] = useState(false)

  return (
    <Box>
      <Grid columns={['150px 1fr 16px']} sx={{ mb: [1] }}>
        <Text variant='label'>
          {label}
          <Text
            as='span'
            sx={{ ml: [2], textTransform: 'none', letterSpacing: 'body' }}
          >
            {units}
          </Text>
        </Text>
        <Text
          sx={{
            opacity: !isNaN(bounds[0]) || tooltips ? 1 : 0,
            color: 'secondary',
            fontFamily: 'mono',
            fontSize: [1],
            mt: ['3px'],
            ml: [3],
            transition: '0.2s',
            userSelect: 'none',
          }}
        >
          {!isNaN(bounds[0]) && format('.3~s')(bounds[0].toFixed(0))}
          {!isNaN(bounds[0]) && ' - '}
          {!isNaN(bounds[0]) && format('.3~s')(bounds[1].toFixed(0))}
          {isNaN(bounds[0]) && tooltips && 'drag to filter'}
        </Text>
        <TooltipToggle
          tooltips={tooltips}
          value={tooltip}
          setValue={setTooltip}
        />
      </Grid>
      <TooltipDescription
        label={label}
        value={tooltip}
        tooltips={tooltips}
        ml={0}
      />
      <Axis
        x={x}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data}
        label={label}
        setBounds={setBounds}
        ticks={ticks}
      />
    </Box>
  )
}

export default Chart
