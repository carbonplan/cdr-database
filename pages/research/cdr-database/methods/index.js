import { useState, useEffect } from 'react'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../../../components/methods/main'
import { withAuth } from '../../../../lib/auth'

function Methods(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout
      footer={false}
      metadata={false}
      title={'cdr database / research / carbonplan'}
      description={'Public database of reports on carbon removal projects.'}
      card={'https://images.carbonplan.org/social/cdr-database.png'}
      nav={'research'}
    >
      <Guide />
      <Main section={section} setSection={setSection} />
    </Layout>
  )
}

export default withAuth(Methods, ['admin'])
