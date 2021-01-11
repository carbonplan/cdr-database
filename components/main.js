import { useState, useEffect } from 'react'
import { Grid, Box, Text, Input } from 'theme-ui'
import Sidebar from '../components/sidebar'
import List from './list'

const initFilters = {
  forests: true,
  dac: true,
  mineralization: true,
  soil: true,
  biomass: true,
  ocean: true,
  STRP2020: true,
  MSFT2021: true,
  avoided: true,
  removal: true,
  group: false,
  search: '',
}

const initBounds = {
  volume: [],
  permanence: [],
}

const Main = ({ projectData, metricsData }) => {
  const [filters, setFilters] = useState(initFilters)
  const [filtered, setFiltered] = useState({ count: 0 })
  const [bounds, setBounds] = useState(initBounds)
  const [highlighted, setHighlighted] = useState(null)

  useEffect(() => {
    let obj = {}
    let count = 0
    projectData.forEach((d) => {
      obj[d.id] = inFilter(d)
      if (obj[d.id]) {
        count += 1
      }
    })
    obj.count = count
    setFiltered(obj)
  }, [filters, bounds])

  function checkBounds(value, bounds) {
    if (bounds.length == 0) return true
    return value > bounds[0] && value < bounds[1]
  }

  function inFilter(d) {
    const inTags =
      (filters.forests && d.tags.length > 0 && d.tags[0] == 'forests') ||
      (filters.dac && d.tags.length > 0 && d.tags[0] == 'dac') ||
      (filters.mineralization &&
        d.tags.length > 0 &&
        d.tags[0] == 'mineralization') ||
      (filters.soil && d.tags.length > 0 && d.tags[0] == 'soil') ||
      (filters.biomass && d.tags.length > 0 && d.tags[0] == 'biomass') ||
      (filters.ocean && d.tags.length > 0 && d.tags[0] == 'ocean')
    const inSource =
      (filters.STRP2020 &&
        d.source.name == 'Stripe 2020 Negative Emissions Purchase') ||
      (filters.MSFT2021 && d.source.name == 'Microsoft 2021 CDR RFP')
    const inMechanism =
      (filters.avoided && d.metrics[0].avoided == 1.0) ||
      (filters.removal && d.metrics[0].removal == 1.0)
    const inBounds =
      checkBounds(d.metrics[1].value, bounds.volume) &&
      checkBounds(d.metrics[3].value, bounds.permanence)
    const inSearch =
      filters.search.length > 0 && d.name.includes(filters.search)
    const inFilter = inTags && inSource && inBounds && inMechanism
    if (filters.search.length > 0 && inSearch && inFilter) return true
    if (filters.search.length == 0 && inFilter) return true
    else return false
  }

  return (
    <Grid columns={[1, 1, 'minmax(400px, 30%) auto']} gap={['0px']}>
      <Sidebar
        setBounds={setBounds}
        filtered={filtered}
        data={metricsData}
        filters={filters}
        setFilters={setFilters}
        highlighted={highlighted}
      />
      <List
        filtered={filtered}
        data={projectData}
        setHighlighted={setHighlighted}
      />
    </Grid>
  )
}

export default Main
