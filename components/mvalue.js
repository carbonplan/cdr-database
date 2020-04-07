import { Box } from 'theme-ui'

const MetricValue = (props) => {
    // TODO: breakout chart by metric type
    return (
        <div title={props.value}> <Box> { props.value } </Box> </div>
    )
}

export default MetricValue