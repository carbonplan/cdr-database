import { Box } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import glossary from '../../glossary'

const TooltipDescription = ({ label, value, tooltips, ml, sx }) => {
  return (
    <Box sx={{ pb: [tooltips && value ? 2 : 0] }}>
      <AnimateHeight
        duration={100}
        height={tooltips && value ? 'auto' : 0}
        easing={'linear'}
      >
        {tooltips && value && (
          <Box sx={{ ...sx }}>
            <Box
              sx={{
                fontSize: [1, 1, 1, 2],
                mt: [0],
                color: 'text',
              }}
            >
              {glossary[label]}
            </Box>
          </Box>
        )}
      </AnimateHeight>
    </Box>
  )
}

export default TooltipDescription
