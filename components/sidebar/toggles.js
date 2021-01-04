import { memo } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { Toggle } from '@carbonplan/components'

const Toggles = ({ filters, setFilters }) => {

  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  return <Box>
    <Grid columns={['60px 1fr']}>
      <Toggle value={filters['group']} onClick={() => toggleOption('group')}/>
      <Text variant='label' sx={{mt: ['-1px']}}>GROUP BY APPLICANT</Text>
    </Grid>
  </Box>
}

export default memo(Toggles)