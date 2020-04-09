import Expander from './expander'
import { Box, Divider, jsx, Grid, Text, IconButton } from 'theme-ui'
import { connect } from 'react-redux'
import { useState } from 'react'

const Metric = ({ metric }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return <div>
    <Grid columns={['30px 100px 1fr', '30px 150px 1fr', '150px 1fr 30px']}>
      <IconButton onClick={toggle} aria-label='Toggle more info' sx={{ 
        cursor: 'pointer', 
        display: ['inherit', 'inherit', 'none'] 
      }}>
        <Expander expanded={expanded}></Expander>
      </IconButton>
      <Text variant='metric.value'>{metric.value}</Text>
      <Text variant='metric.label'>{metric.name} [{metric.units}] </Text>
      <IconButton onClick={toggle} aria-label='Toggle more info' sx={{
        cursor: 'pointer', display: ['none', 'none', 'inherit'] 
      }}>
        <Expander expanded={expanded}></Expander>
      </IconButton>
    </Grid>
    {expanded && <Box>
      More details on metric go here.
    </Box>}
    <Divider sx={{ mr: [2] }}/>
  </div>
}

export default Metric
