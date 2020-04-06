import { Box, Divider, Grid, Text, IconButton } from 'theme-ui'
import { connect } from 'react-redux'
import { Component } from 'react'
import MetricValue from './mvalue'

const mapStateToProps = (state) => {
  return {}
}

class Report extends Component {

  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render() {
    const { metric } = this.props
    const { expanded } = this.state

    return <div>
      <Grid
        columns={['100px 1fr 30px']}>
        <MetricValue value={metric.value} />
        <Text>{metric.name} [{metric.units}] </Text>
        <IconButton aria-label='Toggle more info'>
          {/* Q: Why did I need height here? Also color neds to be changed in dark mode */}
          <svg width="100%" height="20px" onClick={this.toggle} sx={{ height: [30, null, 20], width: [30, null, 20], cursor: 'pointer' }}>
            <polygon points='3,3 19,3 11,16'
              sx={{
                fill: 'text', stroke: 'text', strokeWidth: 1, transition: '0.25s all',
                transformOrigin: [
                  '11px 8px',
                  null,
                  '10px 8px'
                ],
                // Q: Rotation is not happening, why?
                transform: [
                  expanded ? '' : 'rotate(-90deg)',
                  null,
                  expanded ? '' : 'rotate(90deg)'
                ]
              }} />
          </svg>
        </IconButton>
      </Grid>
      {expanded && <Box>
        More details on metric go here.
      </Box>}
      {/* Q: Move to theme.js ?*/}
      <Divider sx={{ 'border': 'none', 'border-top': '2px dotted' }}/>
    </div>
  }
}

  export default connect(mapStateToProps)(Report)
