import { useState } from 'react'
import { Box } from 'theme-ui'
import { Check } from '@carbonplan/icons'

const RatingPicker = ({ value, setValue }) => {
  const [hover, setHover] = useState(0)

  return (
    <Box sx={{ ml: ['-5px'], mt: ['-2px', '-2px', '-2px', 0] }}>
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box
          key={'rating-' + i}
          onMouseOver={() => setHover(d + 1)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setValue(d + 1)}
          sx={{ display: 'inline-block' }}
        >
          <Check
            sx={{
              cursor: 'pointer',
              width: '16px',
              ml: ['4px'],
              mr: ['8px'],
              mt: ['1px'],
              strokeWidth: 1.5,
              opacity:
                (hover == 0 && d < value) || (hover > 0 && d < hover) ? 1 : 0.3,
              transition: '0.15s',
              '&: hover': {
                stroke: 'primary',
                strokeWidth: '2px',
              },
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default RatingPicker
