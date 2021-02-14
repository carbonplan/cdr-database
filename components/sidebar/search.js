import { memo } from 'react'
import { Box, Grid, Text, Input } from 'theme-ui'
import Tooltip from '../tooltip'

const Search = ({ filters, setFilters, tooltips, setTooltips }) => {
  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  return (
    <Box sx={{ mr: ['24px'] }}>
      <Grid columns={['100px 1fr 16px']}>
        <Text variant='label'>Search</Text>
        <Input
          type='text'
          autoFocus={true}
          placeholder='enter search term'
          onChange={(e) => setSearch(e.currentTarget.value)}
          sx={{
            fontSize: [1],
            height: '24px',
            pt: [2],
            pb: [3],
            pl: [0],
            pr: [0],
            mt: ['3px'],
            fontFamily: 'mono',
            borderRadius: '0px',
            borderWidth: '0px',
            textAlign: 'left',
            display: 'inline-block',
          }}
          value={filters.search}
        />
        <Tooltip
          value={'search'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
    </Box>
  )
}

export default memo(Search)
