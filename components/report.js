import Metric from '../components/metric'

const Report = (props) => {
    console.log(props)
    var tags = props.project.properties.tags.join('] [')
    return (
        <li><b> {props.project.properties.name}: </b> [<i>{tags}</i>]
            <ul> 
                {props.project.properties.metrics.map(metric => (<Metric metric={metric}></Metric>))}
            </ul>
        </li>
    )
}
export default Report
