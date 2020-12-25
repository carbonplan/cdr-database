import { Grid, Flex, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Main from '../components/main'

function Index() {
  return (
    <Layout>
      <Grid sx={{py: [2], mb: [4]}} columns={[1, 1, 'auto 1fr']}>
        <Text sx={{
          fontSize: [7],
          fontFamily: 'heading',
          mt: ['-5px']
        }}>
          Project reports
        </Text>
        <Box sx={{position: 'relative'}}>
        <Text sx={{
          fontSize: [3],
          fontFamily: 'body',
          ml: [0, 0, 5],
          mt: [0, 0, '20px'],
        }}>
          This is a public database of reports on carbon removal project proposals 
          based on independent analysis of public information.
        </Text>
        </Box>
      </Grid>
      <Main/>
    </Layout>
  )
}

export default Index
