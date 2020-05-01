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

function Methods (props) {

  return (
    <Layout>
      <Heading sx={{ py: [3], fontSize: [7] }}>
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
      <Grid columns={[2]}>
        <Box>
          <Heading sx={{ my: [5], fontSize: [4], mb: [2] }}>
            / by project
          </Heading>
        </Box>
        <Box>
          <Heading sx={{ my: [5], fontSize: [4], mb: [2] }}>
            / by metric
          </Heading>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Methods