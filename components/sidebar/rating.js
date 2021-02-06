import { useState } from 'react'
import { Box } from 'theme-ui'
import { Icons } from '@carbonplan/components'

const { Check } = Icons

const Rating = ({ value, setValue }) => {
  const [hover, setHover] = useState(0)

  return (
    <Box sx={{ width: '250px', ml: ['-5px'], mt: ['-2px'] }}>
      {[0, 1, 2, 3, 4].map((d) => (
        <Box
          onMouseOver={() => setHover(d + 1)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setValue(d + 1)}
          sx={{ display: 'inline-block' }}
        >
          <Check
            sx={{
              cursor: 'pointer',
              width: '28px',
              ml: ['-1px'],
              mr: ['0px'],
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

export default Rating
