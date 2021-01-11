import { memo } from 'react'
import { Grid, Text, Input } from 'theme-ui'

const Search = ({ filters, setFilters }) => {
  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  return (
    <Grid columns={['100px 1fr']}>
      <Text variant='label'>Search:</Text>
      <Input
        type='text'
        autoFocus={true}
        placeholder='enter search term'
        onChange={(e) => setSearch(e.currentTarget.value)}
        sx={{
          fontSize: [2],
          height: '24px',
          pt: [2],
          pb: [3],
          pl: [0],
          pr: [0],
          fontFamily: 'mono',
          borderRadius: '0px',
          borderWidth: '0px',
          textAlign: 'left',
          display: 'inline-block',
        }}
        value={filters.search}
      />
    </Grid>
  )
}

export default memo(Search)
