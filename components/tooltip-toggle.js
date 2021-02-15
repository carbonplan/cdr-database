import { useEffect } from 'react'
import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const TooltipToggle = ({ tooltips, value, setValue }) => {
  useEffect(() => {
    if (!tooltips) setValue(false)
  }, [tooltips])

  return (
    <Box>
      <Box
        sx={{ display: 'inline-block', cursor: 'pointer', mt: ['3px'] }}
        onClick={(e) => {
          e.stopPropagation()
          setValue(!value)
        }}
      >
        <Icons.Info
          closed={true}
          sx={{
            opacity: tooltips ? 1 : 0,
            color: 'secondary',
            width: 16,
            height: 16,
            transition: '0.15s',
            color: value ? 'primary' : 'secondary',
            '&:hover': {
              stroke: 'primary',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default TooltipToggle
