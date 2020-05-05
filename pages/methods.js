import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { Heading, Grid, Box, Text, Link } from 'theme-ui'
import { useEffect } from 'react'
import { withRedux } from '../lib/redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import globals from '../globals'
import fetch from 'isomorphic-unfetch'
import { default as NextLink } from 'next/link'

import Metrics from '../methods/metrics.md'
import Projects from '../methods/projects.md'
import TOC from '../methods/toc.md'

function Methods (props) {

  return (
    <Layout>
      <Heading sx={{ py: [3], fontSize: [6] }}>
        <NextLink href='/'><Text sx={{ 
          display: 'inline-block', 
          mr: [3],
          cursor: 'pointer',
          '&:hover': {
            color: 'secondary'
          }
        }}>←</Text></NextLink>
        Methods
      </Heading>
      <Text sx={{ maxWidth: '700px' }}>
        Here we provide detailed methods on our project evaluation process.
        We include specific notes on each project, and detailed descriptions 
        of our metrics. This content is on Github as markdown files with versions.
        If you spot an error, or think we got something wrong, open an issue or
        email us.
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
          <TOC></TOC>
        </Box>
        <Box sx={{ 
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderLeftWidth: ['0px', '0px', '1px'],
          pl: [1, 5, 5],
          pr: [1, 7, 7]
        }}>
          <Metrics></Metrics>
          <Projects></Projects>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Methods