const Metric = (props) => {
    console.log(props)
    return (
        <li> { props.metric.name }: {props.metric.value} </li>
    )
}
export default Metric