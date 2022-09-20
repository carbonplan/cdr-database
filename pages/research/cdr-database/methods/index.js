import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../../../components/methods/main'
import Notice from '../../../../components/notice'

function Methods(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <Notice />
      </Box>
      <Layout
        footer={false}
        metadata={false}
        title={'CDR Database – CarbonPlan'}
        description={
          'Methods for our public database of reports on carbon removal projects.'
        }
        card={'https://images.carbonplan.org/social/cdr-database.png'}
        nav={'research'}
      >
        <Guide />
        <Main section={section} setSection={setSection} />
      </Layout>
    </>
  )
}

export default Methods
