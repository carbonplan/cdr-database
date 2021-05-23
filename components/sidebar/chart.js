import { useState, useEffect } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import { Row, Column, Expander } from '@carbonplan/components'
import Axis from './axis'
import TooltipToggle from '../tooltip/toggle'
import TooltipDescription from '../tooltip/description'
import sx from '../styles'

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
  tooltipLabel,
}) => {
  const [tooltip, setTooltip] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const onClick = () => {
    if (expanded) {
      setExpanded(false)
      setBounds((bounds) => {
        return {
          ...bounds,
          [label]: [],
        }
      })
    } else {
      setExpanded(true)
    }
  }

  return (
    <Box>
      <Row columns={[4]} sx={{ mb: [1, 1, 1, 2] }}>
        <Column start={[1]} width={[2]}>
          <Box
            sx={{
              ...sx.label,
              mt: ['0px'],
              ml: [-1],
              cursor: 'pointer',
              '&:hover > #expander': {
                stroke: 'primary',
              },
            }}
            onClick={onClick}
          >
            <Expander
              id='expander'
              sx={{
                position: 'relative',
                width: 20,
                top: '2px',
                mr: [2],
              }}
              value={expanded}
            />
            {label}
            <Box
              as='span'
              sx={{
                ml: [2],
                textTransform: 'none',
                letterSpacing: 'body',
                color: 'muted',
              }}
            >
              {units}
            </Box>
          </Box>
        </Column>
        {
          <Column start={[3]} width={[2]} dl={1}>
            {expanded && (
              <Box
                sx={{
                  display: 'inline-block',
                  opacity: !isNaN(bounds[0]) || tooltips ? 1 : 0,
                  color: !isNaN(bounds[0]) ? 'secondary' : 'muted',
                  fontFamily: 'mono',
                  fontSize: [1, 1, 1, 2],
                  textTransform: 'uppercase',
                  mt: ['3px'],
                  userSelect: 'none',
                }}
              >
                {!isNaN(bounds[0]) && format('.3~s')(bounds[0].toFixed(0))}
                {!isNaN(bounds[0]) && ' - '}
                {!isNaN(bounds[0]) && format('.3~s')(bounds[1].toFixed(0))}
                {isNaN(bounds[0]) && tooltips && 'drag to filter'}
              </Box>
            )}
            <Box sx={{ display: 'inline-block', float: 'right' }}>
              <TooltipToggle
                tooltips={tooltips}
                value={tooltip}
                setValue={setTooltip}
              />
            </Box>
          </Column>
        }
      </Row>
      <TooltipDescription
        label={tooltipLabel}
        value={tooltip}
        tooltips={tooltips}
        ml={0}
      />
      {expanded && (
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
      )}
    </Box>
  )
}

export default Chart
