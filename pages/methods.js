import Layout from '../components/layout'
import { Heading, Grid, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { useState, useEffect } from 'react'
import Metrics from '../methods/metrics.md'
import ProgramStripeClimate2020 from '../methods/programs/stripe-climate-2020.md'
import TOC from '../methods/toc.js'
import { useRouter } from 'next/router'

function Methods (props) {
  const router = useRouter()
  const [section, setSection] = useState('metrics')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section])

  return (
    <Layout>
      <Heading sx={{ py: [3], fontSize: [6] }}>
        <NextLink href={router.asPath.replace('methods','')}><Text sx={{ 
          display: 'inline-block', 
          mr: [3],
          cursor: 'pointer',
          '&:hover': {
            color: 'secondary'
          }
        }}>←</Text></NextLink>
        Methods
      </Heading>
      <Text sx={{ maxWidth: '800px' }}>
        Detailed methods on our project evaluations.
        We include descriptions of our metrics and
        notes on each project we evaluated in the context
        of a procurement program. All content is on Github as versioned markdown.
        If you spot an error, or think we got something wrong, open an{' '}
        <Link href='https://github.com/carbonplan/reports'>issue</Link> or{' '}
        <Link href='mailto:reports@carbonplan.org'>email us</Link>.
      </Text>
      <Grid columns={[1, '17% 83%', '17% 83%']} gap={['64px']} sx={{ mt: [4] }}>
        <Box sx={{ 
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: ['1px', '0px', '0px'],
          height: ['fit-contents', '200px', '200px'],
          backgroundColor: 'background',
          position: 'sticky',
          top: '56px',
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
          {(section == 'metrics') && <Metrics/>}
          {(section == 'programs:stripe-climate-2020') && <ProgramStripeClimate2020/>}
        </Box>
      </Grid>
    </Layout>
  )
}

export default Methods