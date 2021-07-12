import { useEffect } from 'react'
import { Box } from 'theme-ui'
import { Info } from '@carbonplan/icons'

const TooltipToggle = ({ tooltips, value, setValue }) => {
  useEffect(() => {
    if (!tooltips) setValue(false)
  }, [tooltips])

  return (
    <Box>
      <Box
        sx={{
          display: 'inline-block',
          cursor: 'pointer',
          mt: ['3px'],
          position: 'relative',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover > #tooltip-toggle': {
              stroke: 'primary',
            },
          },
        }}
        onClick={(e) => {
          e.stopPropagation()
          setValue(!value)
        }}
      >
        <Info
          id='tooltip-toggle'
          sx={{
            stroke: tooltips ? (value ? 'primary' : 'muted') : 0,
            transition: '0.15s',
            width: 16,
            height: 16,
          }}
        />
      </Box>
    </Box>
  )
}

export default TooltipToggle
