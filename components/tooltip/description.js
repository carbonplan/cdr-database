import { Box } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import glossary from '../../glossary'

const TooltipDescription = ({ label, value, tooltips, ml }) => {
  return (
    <Box sx={{ pb: [tooltips && value ? 2 : 0] }}>
      <AnimateHeight
        duration={100}
        height={tooltips && value ? 'auto' : 0}
        easing={'linear'}
      >
        {tooltips && value && (
          <Box
            sx={{
              fontSize: [1],
              mt: [0],
              ml: !(ml == null) ? ml : '115px',
              color: 'text',
              maxWidth: '450px',
            }}
          >
            {glossary[label]}
          </Box>
        )}
      </AnimateHeight>
    </Box>
  )
}

export default TooltipDescription
