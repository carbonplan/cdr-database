/** @jsx jsx */
import { jsx, Box, IconButton, Text } from 'theme-ui'
import { useColorMode, useThemeUI } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Footer = (props) => {
  const context = useThemeUI()
  const theme = context.theme

  const [colorMode, setColorMode] = useColorMode()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const projects = useSelector((state) => state.projects)
  const visibility = useSelector((state) => state.visibility)

  // number of projects
  const nProjects = Object.values(visibility).reduce(function (a, b) {
    return a + b
  }, 0)
  const nProjectsString = String(nProjects).padStart(2, 0)

  // color of first projects primary tag
  var colorKey
  var i
  if (nProjects) {
    for (i = 0; i < projects.length; i++) {
      if (visibility[projects[i].id]) {
        colorKey = theme.tags[projects[i].tags[0]]
        break
      }
    }
  } else {
    colorKey = 'secondary'
  }
  const colorHex = theme.colors[colorKey].toUpperCase()

  const toggle = (e) => {
    if (colorMode == 'light') setColorMode('dark')
    else setColorMode('light')
  }

  useEffect(() => {
    const setFromEvent = (e) => setCoords({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return (
    <Box
      sx={{
        float: 'right',
        transformOrigin: 'right',
        transform: 'rotate(90deg)',
        paddingBottom: '10px',
        backgroundColor: 'background',
        pointerEvents: 'all',
      }}
    >
      <Text
        variant='metric.units'
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          leftMargin: '15px',
        }}
      >
        PROJECTS: {nProjectsString}
      </Text>
      <IconButton aria-label='Current Color' sx={{ fill: colorKey }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <circle r={5} cx={19} cy={19} />
        </svg>
      </IconButton>
      <Text
        variant='metric.units'
        sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}
      >
        {colorHex}
      </Text>
      <IconButton
        aria-label='Toggle dark mode'
        onClick={() => toggle()}
        sx={{
          fill: 'background',
          stroke: 'secondary',
          cursor: 'pointer',
          position: 'relative',
          top: '8px',
          left: '7px',
          transition: '0.25s all',
          '&:hover': {
            stroke: 'text',
          },
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          strokeWidth='2'
        >
          <circle cx='12' cy='12' r='4.77' />
          <line x1='12' x2='12' y2='4.06' />
          <line x1='12' y1='19.94' x2='12' y2='24' />
          <line x1='20.49' y1='3.51' x2='17.61' y2='6.39' />
          <line x1='6.39' y1='17.61' x2='3.51' y2='20.49' />
          <line x1='20.49' y1='20.49' x2='17.61' y2='17.61' />
          <line x1='6.39' y1='6.39' x2='3.51' y2='3.51' />
          <line x1='24' y1='12' x2='19.94' y2='12' />
          <line x1='4.06' y1='12' y2='12' />
        </svg>
      </IconButton>
    </Box>
  )
}

export default Footer
