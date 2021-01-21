import { memo } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { Toggle } from '@carbonplan/components'

const Toggles = ({ filters, setFilters }) => {
  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  return (
    <Box sx={{ display: 'inline-block', float: 'right' }}>
      <Toggle
        value={filters['group']}
        onClick={() => toggleOption('group')}
        sx={{ mt: ['2px'], mr: [3] }}
      />
      <Text
        variant='label'
        sx={{
          position: 'relative',
          top: '-5px',
          display: 'inline-block',
          mt: ['5px'],
        }}
      >
        GROUP BY APPLICANT
      </Text>
    </Box>
  )
}

export default memo(Toggles)
