import Layout from '../../../components/layout'
import { Heading, Grid, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { useState, useEffect } from 'react'
import Metrics from '../../../methods/metrics.md'
import Feedback from '../../../methods/feedback.md'
import ProgramStripe2020 from '../../../methods/programs/stripe-2020.md'
import TOC from '../../../methods/toc.js'

function Methods (props) {
  const [section, setSection] = useState('metrics')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section])

  return (
    <Layout>
      <Box sx={{
        
      }}>
      <Heading sx={{ pb: [3], pt: [4], fontSize: [6] }}>
        Methods
      </Heading>
      <Text sx={{ maxWidth: '800px', fontSize: [3] }}>
        Here are descriptions of our metrics and
        notes on each project we evaluated in the context
        of a procurement program. Want to give us feedback? 
        Read <Link onClick={() => setSection('feedback')}>here</Link>.
      </Text>
      </Box>
      <Grid columns={[1, '17% 83%', '17% 83%']} gap={['64px']} sx={{ mt: [4] }}>
        <Box sx={{ 
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: ['1px', '0px', '0px'],
          height: ['fit-contents', '200px', '200px'],
          backgroundColor: 'background',
          position: 'sticky',
          top: '55px',
          pr: [1],
          pb: [2]
        }}>
          <TOC setSection={setSection}></TOC>
        </Box>
        <Box sx={{ 
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderLeftWidth: ['0px', '0px', '1px'],
          pl: [1, 5, 5],
          pr: [1, 7, 7]
        }}>
          <Box sx={{ mt: ['-50px'] }}>
          {(section == 'metrics') && <Metrics/>}
          {(section == 'feedback') && <Feedback/>}
          {(section == 'programs:stripe-2020') && <ProgramStripe2020/>}
          </Box>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Methods