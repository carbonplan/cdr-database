import { Grid, Flex, Container, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@carbonplan/components'
import Main from '../../../components/main'
import collection from '../../../data/projects'

const selectMetric = (d, name) => {
  return d.metrics.filter((m) => m.name == name)[0].value
}

function Index() {
  const projects = collection.projects.sort((a, b) =>
    a.applicant.localeCompare(b.applicant)
  )
  const metrics = {
    volume: projects.map((d) => ({
      id: d.id,
      tag: d.tags[0],
      value: selectMetric(d, 'volume'),
    })),
    permanence: projects.map((d) => ({
      id: d.id,
      tag: d.tags[0],
      value: selectMetric(d, 'permanence'),
    })),
  }

  return (
    <Layout
      footer={false}
      metadata={false}
      container={'wide'}
      dimmer={false}
      title={'cdr database / research / carbonplan'}
      description={'Public database of reports on carbon removal projects.'}
      card={'https://images.carbonplan.org/social/cdr-database.png'}
    >
      <Main projects={projects} metrics={metrics} />
    </Layout>
  )
}

export default Index
