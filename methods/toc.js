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
    <Box sx={{ fontSize: [5], mt: ['21px'] }}>
      <NextLink href='/reports'><a><Text sx={{ 
          display: 'inline-block', 
          mr: [3],
          color: 'text',
          cursor: 'pointer',
          '&:hover': {
            color: 'secondary'
          }
        }}>←</Text></a></NextLink>Contents
    </Box>
    <Box sx={{ mt: [2] }}>
      <Link onClick={() => setSection('metrics')}>Metrics</Link>
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
        <Link onClick={() => setSection('programs:stripe-climate-2020')}>Stripe Climate 2020</Link>
      </Box>
      </>
    }
    </>
  )
}

export default TOC