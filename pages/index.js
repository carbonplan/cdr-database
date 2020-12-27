import { Grid, Flex, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withAuth } from '../lib/auth'
import Layout from '../components/layout'
import Main from '../components/main'
import data from '../data'

const selectMetric = (d, name) => {
  return d.metrics.filter((m) => m.name == name)[0].value
}

function Index() {
  const projectData = data.projects
  const metricsData = {
    volume: projectData.map((d) => ({id: d.id, tag: d.tags[0], value: selectMetric(d, 'volume')})),
    permanence: projectData.map((d) => ({id: d.id, tag: d.tags[0], value: selectMetric(d, 'permanence')}))
  }

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
      <Box>
      <Main projectData={projectData} metricsData={metricsData} />
    </Box>
    </Layout>
  )
}

export default withAuth(Index)
