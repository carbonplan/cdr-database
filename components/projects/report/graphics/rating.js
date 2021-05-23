import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const { Check } = Icons

const Rating = ({ sx, value }) => {
  return (
    <Box sx={{ ml: ['-5px'], mt: ['5px'] }}>
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box key={'rating-' + i} sx={{ display: 'inline-block' }}>
          <Check
            sx={{
              position: 'relative',
              cursor: 'pointer',
              width: '28px',
              ml: ['0px'],
              mr: ['0px'],
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
