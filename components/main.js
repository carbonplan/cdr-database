import { useState, useEffect } from 'react'
import { Grid, Box, Text, Input } from 'theme-ui'
import Report from '../components/report'
import Count from './count'
import data from '../data'

const initialFilters = {
  forests: true,
  dac: true,
  mineralization: true,
  search: ''
}

const Main = () => {
  const [filters, setFilters] = useState(initialFilters)
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    setFiltered(data.projects.filter((d) => inFilter(d)))
  }, [filters])

  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  function inFilter(d) {
    const inTags = true
    const inSearch = ((filters.search.length > 0) && d.name.includes(filters.search))
    if ((filters.search.length > 0) && inSearch) return true
    if ((filters.search.length == 0) && inTags) return true
    else return false
  }

  return <Grid columns={[1, 1, 'minmax(400px, 30%) auto']}>
    <Box sx={{display: ['none', 'none', 'initial']}}>
      <Text onClick={() => toggleOption('dac')} sx={{opacity: filters.dac ? 1 : 0.2}}>
        DAC
      </Text>
      <Text onClick={() => toggleOption('forests')} sx={{opacity: filters.forests ? 1 : 0.2}}>
        Forests
      </Text>
      <Text onClick={() => toggleOption('mineralization')} sx={{opacity: filters.mineralization ? 1 : 0.2}}>
        Mineralization
      </Text>
      <Input
        type='text'
        autoFocus={true}
        placeholder='search'
        onChange={(e) => setSearch(e.currentTarget.value)}
        sx={{
          fontSize: [2],
          height: '24px',
          pt: [2],
          pb: [3],
          pl: [0],
          pr: [0],
          fontFamily: 'monospace',
          borderRadius: '0px',
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          textAlign: 'right',
          display: 'inline-block',
        }}
        value={filters.search}
      />
    </Box>
    <Box>
      <Count value={filtered.length}/>
      <Grid columns={[1, 1, 2]}>
        {filtered
          .map((d) => <Report key={d.id} name={d.name} description={d.description} tags={d.tags}/>)
        }
      </Grid>
    </Box>
  </Grid>
}

export default Main