import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { withRedux } from '../lib/redux'

function Index (props) {
  return (
    <Layout>
      <Sidebar></Sidebar>
    <Main props={props}></Main>
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