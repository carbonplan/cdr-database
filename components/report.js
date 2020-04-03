import Metric from '../components/metric'

const Report = (props) => {
    console.log(props)
    var tags = props.project.tags.join('] [')
    return (
        <li><b> {props.project.name}: </b> [<i>{tags}</i>]
            <ul> 
                {props.project.metrics.map(metric => (<Metric metric={metric}></Metric>))}
            </ul>
        </li>
    )
}
export default Report
