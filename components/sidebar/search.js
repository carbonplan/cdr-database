import { memo, useState } from 'react'
import { Box, Grid, Text, Input } from 'theme-ui'
import Field from './field'

const Search = ({ filters, setFilters, tooltips }) => {
  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  const [value, setValue] = useState(false)

  return (
    <Box sx={{ mr: ['24px'] }}>
      <Field label='search' tooltips={tooltips}>
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
      </Field>
    </Box>
  )
}

export default memo(Search)
