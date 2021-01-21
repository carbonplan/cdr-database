import { Grid, Flex, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@carbonplan/components'
import { withAuth } from '../lib/auth'
import Main from '../components/main'
import data from '../data'

const selectMetric = (d, name) => {
  return d.metrics.filter((m) => m.name == name)[0].value
}

function Index() {
  const projectData = data.projects
  const metricsData = {
    volume: projectData.map((d) => ({
      id: d.id,
      tag: d.tags[0],
      value: selectMetric(d, 'volume'),
    })),
    permanence: projectData.map((d) => ({
      id: d.id,
      tag: d.tags[0],
      value: selectMetric(d, 'permanence'),
    })),
  }

  return (
    <Layout footer={false} metadata={false}>
      <Main projectData={projectData} metricsData={metricsData} />
    </Layout>
  )
}

export default withAuth(Index)
