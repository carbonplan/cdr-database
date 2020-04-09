/** @jsx jsx */
import { Box, Divider, jsx, Grid, Text, IconButton } from 'theme-ui'
import { connect } from 'react-redux'
import { useState } from 'react'

const Metric = ({ metric }) => {

  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return <div>
    <Grid columns={['150px 1fr 30px']}>
      <Text variant='metric.value'>{metric.value}</Text>
      <Text variant='metric.label'>{metric.name} [{metric.units}] </Text>
      <IconButton sx={{ 
        cursor: 'pointer'
      }} onClick={toggle} aria-label='Toggle more info'>
        <svg sx={{ height: [30, null, 20], width: [30, null, 20] }}>
          <polygon points='3,3 19,3 11,16'
            sx={{
              fill: 'text', 
              stroke: 'text', 
              strokeWidth: 1, 
              transition: '0.25s all',
              transformOrigin: [
                '11px 8px',
                null,
                '10px 8px'
              ],
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
    <Divider/>
  </div>

}

  export default Metric
