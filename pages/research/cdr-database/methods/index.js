import { useState, useEffect } from 'react'
import { Layout } from '@carbonplan/components'
import Main from '../../../../components/methods/main'

function Methods(props) {
  const [section, setSection] = useState('sources')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <Layout container={'wide'} footer={false} metadata={'scroll'}>
      <Main section={section} setSection={setSection} />
    </Layout>
  )
}

export default Methods
