import { Box, IconButton, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { useState, useEffect } from 'react'

const Footer = (props) => {

  const [colorMode, setColorMode] = useColorMode()
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const toggle = (e) => {
    if (colorMode == 'light') setColorMode('dark')
    else setColorMode('light')
  }

  useEffect(() => {
    const setFromEvent = e => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const color = '#7eb36a'  // TODO: Get from pointer

  return (
    <Box
      sx={{
        transform: 'rotate(-90deg)'
      }}
    >
      <IconButton aria-label='Toggle dark mode' onClick={() => toggle()} >

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='currentcolor'>
          <circle
            r={5}
            cx={17}
            cy={17}
            fill='none'
            stroke='currentcolor'
            strokeWidth={2}
          />
        </svg>
      </IconButton>
      <Text variant='metric.units' sx={{ whiteSpace: 'nowrap', display: 'inline-block', leftMargin: '15px' }}>
        x,y ({ coords.x },{ coords.y })
      </Text>
      <IconButton aria-label='Current Color' >

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='currentcolor'>
          <circle
            r={5}
            cx={19}
            cy={19}
            fill={ color }
          />
        </svg>
      </IconButton>
      <Text variant='metric.units' sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
        { color }
      </Text>

    </Box>
  )
}

export default Footer
