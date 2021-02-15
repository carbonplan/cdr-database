import { Box } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import glossary from '../glossary'

const TooltipDescription = ({ value, selectedTooltips, tooltips, ml }) => {
  return (
    <Box sx={{ pb: [tooltips && selectedTooltips.includes(value) ? 2 : 0] }}>
      <AnimateHeight
        duration={100}
        height={tooltips && selectedTooltips.includes(value) ? 'auto' : 0}
        easing={'linear'}
      >
        <Box
          sx={{
            fontSize: [1],
            mt: [0],
            ml: !(ml == null) ? ml : '115px',
            color: 'text',
          }}
        >
          {glossary[value]}
        </Box>
      </AnimateHeight>
    </Box>
  )
}

export default TooltipDescription
