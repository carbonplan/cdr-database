import { useState, useEffect } from 'react'
import { Grid, Flex, Container, Box, Text } from 'theme-ui'
import { useRouter } from 'next/router'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../../components/main'
import Notice from '../../../components/notice'
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

  const [settingsExpanded, setSettingsExpanded] = useState(false)

  return (
    <>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <Notice />
      </Box>
      <Layout
        footer={false}
        metadata={false}
        dimmer={'bottom'}
        settings={{
          value: settingsExpanded,
          onClick: () => setSettingsExpanded(!settingsExpanded),
        }}
        title={'CDR Database – CarbonPlan'}
        description={'Public database of reports on carbon removal projects.'}
        card={'https://images.carbonplan.org/social/cdr-database.png'}
        nav={'research'}
      >
        <Guide />
        <Main
          projects={projects}
          metrics={metrics}
          settingsExpanded={settingsExpanded}
        />
      </Layout>
    </>
  )
}

export default Index
