import { useState, useEffect } from 'react'
import { useThemeUI, Heading, Grid, Box, Text } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import useMedia from 'react-use/lib/useMedia'
import Desktop from '../../components/methods/desktop'
import Mobile from '../../components/methods/mobile'

function Index(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout container={false} footer={false} metadata={'scroll'}>
      <Box sx={{ display: ['none', 'none', 'initial'] }}>
        <Desktop section={section} setSection={setSection} />
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none'] }}>
        <Mobile section={section} setSection={setSection} />
      </Box>
    </Layout>
  )
}

export default Index
