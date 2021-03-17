import { useState, useEffect } from 'react'
import { Layout } from '@carbonplan/components'
import Main from '../../../../components/methods/main'

function Methods(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout
      container={'wide'}
      footer={false}
      metadata={'scroll'}
      title={'cdr database / research / carbonplan'}
      description={'Public database of reports on carbon removal projects.'}
      card={'https://images.carbonplan.org/social/cdr-database.png'}
    >
      <Main section={section} setSection={setSection} />
    </Layout>
  )
}

export default Methods
