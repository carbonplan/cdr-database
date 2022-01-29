import { useState } from 'react'
import { Box, Grid, Link, Divider } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Expander } from '@carbonplan/components'

const sections = ['Sources', 'Metrics', 'Projects', 'Feedback', 'Terms']

const TOC = ({ section, setSection }) => {
  const [expandedMetrics, setExpandedMetrics] = useState(false)
  const [expandedPrograms, setExpandedPrograms] = useState(false)

  const toggleMetrics = (e) => {
    setExpandedMetrics(!expandedMetrics)
  }

  const togglePrograms = (e) => {
    setExpandedPrograms(!expandedPrograms)
  }

  const style = (current) => {
    if (current == section) {
      return {
        textDecoration: 'none',
        fontFamily: 'heading',
        textTransform: 'uppercase',
        letterSpacing: 'smallcaps',
        pb: ['2px'],
        fontSize: [1, 2, 2, 3],
        mr: ['2px', 4, 0, 0],
        borderColor: 'primary',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            borderColor: 'secondary',
            color: 'secondary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '&:hover': {
            color: 'primary',
          },
        },
      }
    } else {
      return {
        textDecoration: 'none',
        fontSize: [1, 2, 2, 3],
        mr: ['2px', 4, 0, 0],
        pb: ['2px'],
        fontFamily: 'heading',
        textTransform: 'uppercase',
        letterSpacing: 'smallcaps',
        borderColor: 'background',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: 'secondary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '&:hover': {
            color: 'primary',
          },
        },
      }
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          mb: [0],
          mt: [0, 0, 4, 5],
          position: ['relative', 'relative', 'initial'],
          top: ['-7px', '-7px', 0],
        }}
      >
        {sections.map((d, i) => {
          return (
            <Box
              key={'section-' + i}
              sx={{
                mr: [2, 2, 0],
                display: ['inline-block', 'inline-block', 'block'],
                mt: [3],
                fontSize: [2, 2, 2, 3],
              }}
            >
              <Link
                sx={style(d.toLowerCase())}
                onClick={() => setSection(d.toLowerCase())}
              >
                {d}
              </Link>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default TOC
