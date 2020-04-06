import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { withRedux } from '../lib/redux'

function Index (props) {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Main projects={props.features}></Main>
    </Layout>
  )
}

export async function getStaticProps() {
    const data = await import('../data/projects.js')
    const projects = data.default
    return { props: projects }
}

export default withRedux(Index)