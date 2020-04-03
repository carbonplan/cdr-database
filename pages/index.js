import Header from '../components/header'
import Report from '../components/report'
function Index(props) {
    console.log(props)
    return (
        <div>
            <Header name='Carbon Plan Reports'></Header>
            <p>Projects</p>
            {props.features.map(project => (<Report project={ project }></Report>))}
        </div>
    )
}

export async function getStaticProps() {
    const data = await import('../data/projects.js')
    const projects = data.default
    return { props: projects }
}

export default Index