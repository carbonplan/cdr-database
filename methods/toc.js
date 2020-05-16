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
        borderColor: 'text',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '2px',
        '&:hover': {
          borderColor: 'secondary'
        }
      }
    } else {
      return { 
        textDecoration: 'none',
        borderColor: 'background',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '2px'
      }
    }
  }

  return (
    <>
    <Box>
    <NextLink href='/reports'><a><Text sx={{ 
      display: 'inline-block', 
      fontSize: [6],
      mt: [2],
      mr: [3],
      color: 'text',
      cursor: 'pointer',
      '&:hover': {
        color: 'secondary'
      }
    }}>←</Text></a></NextLink>
    </Box>
    <Box sx={{ mt: [2], fontSize: [3],  }}>
      <Link  sx={style('metrics')} onClick={() => setSection('metrics')}>Metrics</Link>
    </Box>
    <Box sx={{ mt: [2], fontSize: [3], textDecoration: 'none' }}>
      <Link sx={style('programs:stripe-2020')} onClick={() => setSection('programs:stripe-2020')}>Projects: Stripe 2020</Link>
      </Box>
    <Box sx={{ mt: [2], fontSize: [3], textDecoration: 'none' }}>
      <Link sx={style('feedback')} onClick={() => setSection('feedback')}>Feedback?</Link>
    </Box>

    </>
  )
}

export default TOC