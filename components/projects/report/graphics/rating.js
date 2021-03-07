import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const { Check } = Icons

const Rating = ({ sx, value }) => {
  return (
    <Box sx={{ ml: ['-5px'], mt: ['6px'] }}>
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box key={'rating-' + i} sx={{ display: 'inline-block' }}>
          <Check
            sx={{
              cursor: 'pointer',
              width: '21px',
              ml: ['-1px'],
              mr: ['0px'],
              strokeWidth: 2.25,
              opacity: d < value ? 1 : 0.3,
              ...sx,
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Rating
