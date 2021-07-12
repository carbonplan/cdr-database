import { Box } from 'theme-ui'
import { Check } from '@carbonplan/icons'

const Rating = ({ sx, value }) => {
  return (
    <Box sx={{ ml: ['-5px'], mt: ['5px'] }}>
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box key={'rating-' + i} sx={{ display: 'inline-block' }}>
          <Check
            sx={{
              position: 'relative',
              cursor: 'pointer',
              width: '16px',
              ml: ['5px'],
              mr: ['7px'],
              mt: ['1px'],
              mb: ['3px'],
              strokeWidth: 1.5,
              opacity: d < value ? 1 : 0.3,
              zIndex: -1,
              ...sx,
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Rating
