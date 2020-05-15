import { Box, Grid, Link, Text } from 'theme-ui'
import { useState } from 'react'
import { default as NextLink } from 'next/link'
import Expander from '../components/expander'

const TOC = ({ setSection }) => {

  const [expandedMetrics, setExpandedMetrics] = useState(false)
  const [expandedPrograms, setExpandedPrograms] = useState(false)

  const toggleMetrics = (e) => {
    setExpandedMetrics(!expandedMetrics)
  }

  const togglePrograms = (e) => {
    setExpandedPrograms(!expandedPrograms)
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
    <Box sx={{ mt: [2] }}>
      <Link onClick={() => setSection('metrics')}>Metrics</Link>
    </Box>
    <Box sx={{ mt: [2] }}>
      <Link onClick={() => setSection('feedback')}>Feedback?</Link>
    </Box>
    <Box sx={{ mt: [2] }}>
      Programs<Box sx={{ 
        display: 'inline-block',
        position: 'relative',
        top: '3px'
      }}><Expander toggle={togglePrograms} expanded={expandedPrograms}/></Box>
    </Box>
    {expandedPrograms && 
      <>
      <Box>
        <Link onClick={() => setSection('programs:stripe-2020')}>Stripe 2020</Link>
      </Box>
      </>
    }

    </>
  )
}

export default TOC