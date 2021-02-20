import { useState, useEffect } from 'react'
import { useThemeUI, Heading, Grid, Box, Text } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import { withAuth } from '../../lib/auth'
import Main from '../../components/methods/main'

function Methods(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout container={false} footer={false} metadata={'scroll'}>
      <Main section={section} setSection={setSection} />
    </Layout>
  )
}

export default withAuth(Methods, ['admin', 'demo'])
