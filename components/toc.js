import { Box, Grid, Link, Text } from 'theme-ui'
import { useState } from 'react'
import { default as NextLink } from 'next/link'
import Expander from '../components/expander'

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
    <>
      <Box
        sx={{
          display: ['none', 'none', 'initial'],
        }}
      >
        <NextLink href='/reports' passHref={true}>
          <Link
            sx={{
              display: 'inline-block',
              fontSize: [6],
              mt: [2],
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
      </Box>
      <Box
        sx={{
          mb: [3, 3, 0],
          mt: [1, 1, 0],
        }}
      >
        <Box
          sx={{
            mr: [3, 3, 0],
            display: ['inline-block', 'inline-block', 'block'],
            mt: [2],
            fontSize: [3],
          }}
        >
          <Link sx={style('metrics')} onClick={() => setSection('metrics')}>
            Metrics
          </Link>
        </Box>
        <Box
          sx={{
            mr: [3, 3, 0],
            display: ['inline-block', 'inline-block', 'block'],
            mt: [2],
            fontSize: [3],
            textDecoration: 'none',
          }}
        >
          <Link sx={style('projects')} onClick={() => setSection('projects')}>
            Projects
          </Link>
        </Box>
        <Box
          sx={{
            display: ['inline-block', 'inline-block', 'block'],
            mt: [2],
            fontSize: [3],
            textDecoration: 'none',
          }}
        >
          <Link sx={style('feedback')} onClick={() => setSection('feedback')}>
            Feedback?
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default TOC
