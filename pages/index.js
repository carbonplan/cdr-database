import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import { withRedux } from '../lib/redux'

function Index (props) {
    return (
        <Layout>
            <Sidebar colors={ props.colors }></Sidebar>
        <Main props={props}></Main>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await import('../data/projects.js')
    const colors = await import('../data/colors.js')
    // const projects = data.default

    let obj = {}
    obj.projects = data.default.features
    obj.colors = colors.default

    return { props: obj }
}

export default withRedux(Index)