import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { Container, Flex, Box } from 'theme-ui'
import { useEffect } from 'react'
import { withRedux } from '../lib/redux'
import { useDispatch } from 'react-redux'

function Index (props) {

  useEffect(() => {
    document.body.addEventListener('keyup', function(e) {
      if (e.which === 9) {
        document.documentElement.classList.remove('no-focus-outline');
      }
    })
  })

  const dispatch = useDispatch()
  dispatch({ type: 'INIT_PROJECTS', value: props.projects })
  dispatch({ type: 'INIT_VISIBILITY' })
  dispatch({ type: 'INIT_FUSE' })

  return (
    <Layout>
      <Main props={props}></Main>
      <Sidebar props={props}></Sidebar>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await import('../data/projects.js')

  let obj = {}
  obj.projects = data.default.features

  return { props: obj }
}

export default withRedux(Index)