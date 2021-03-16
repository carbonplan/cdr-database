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
        sx={{
          display: 'inline-block',
          cursor: 'pointer',
          mt: ['3px'],
          opacity: tooltips ? (value ? 1 : 0.4) : 0,
          transition: '0.15s',
          '&:hover': {
            opacity: 1,
          },
        }}
        onClick={(e) => {
          e.stopPropagation()
          setValue(!value)
        }}
      >
        <Icons.Info
          closed={true}
          sx={{
            color: 'primary',
            width: 16,
            height: 16,
          }}
        />
      </Box>
    </Box>
  )
}

export default TooltipToggle
