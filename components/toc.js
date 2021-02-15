import { Box, Grid, Link, Text } from 'theme-ui'
import { useState } from 'react'
import { default as NextLink } from 'next/link'
import { Expander } from '@carbonplan/components'

const sections = ['Sources', 'Metrics', 'Projects', 'Feedback']

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
        pb: ['2px'],
        borderColor: 'text',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '2px',
        '&:hover': {
          borderColor: 'secondary',
        },
      }
    } else {
      return {
        textDecoration: 'none',
        pb: ['2px'],
        borderColor: 'background',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '2px',
      }
    }
  }

  return (
    <Box>
      <NextLink href='/' passHref={true}>
        <Link
          sx={{
            display: 'inline-block',
            fontSize: [6],
            mt: [1],
            mr: [3],
            color: 'text',
            cursor: 'pointer',
            '&:hover': {
              color: 'secondary',
            },
            textDecoration: 'none',
          }}
        >
          ←
        </Link>
      </NextLink>
      <Box
        sx={{
          mb: [3, 3, 0],
          mt: [1, 1, 0],
        }}
      >
        {sections.map((d) => {
          return (
            <Box
              sx={{
                mr: [3, 3, 0],
                display: ['inline-block', 'inline-block', 'block'],
                mt: [2],
                fontSize: [3],
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
