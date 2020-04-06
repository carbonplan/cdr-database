const Metric = (props) => {
  return (
    <li> {props.metric.name} ({ props.metric.units}): {props.metric.value} </li>
  )
}
export default Metric