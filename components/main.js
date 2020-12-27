import { useState, useEffect } from 'react'
import { Grid, Box, Text, Input } from 'theme-ui'
import Sidebar from '../components/sidebar'
import List from './list'

const initialFilters = {
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
  search: ''
}

const Main = ({ projectData, metricsData }) => {
  const [filters, setFilters] = useState(initialFilters)
  const [filtered, setFiltered] = useState({count: 0})
  const [highlighted, setHighlighted] = useState(null)

  useEffect(() => {
    let obj = {}
    let count = 0
    projectData.forEach((d) => {
      obj[d.id] = inFilter(d)
      if (obj[d.id]) {count += 1}
    })
    obj.count = count
    setFiltered(obj)
  }, [filters])

  function inFilter(d) {
    const inTags = (
      ((filters.forests && d.tags.length > 0) && d.tags[0] == 'forests') || 
      ((filters.dac && d.tags.length > 0) && d.tags[0] == 'dac') ||
      ((filters.mineralization && d.tags.length > 0) && d.tags[0] == 'mineralization') ||
      ((filters.soil && d.tags.length > 0) && d.tags[0] == 'soil') ||
      ((filters.biomass && d.tags.length > 0) && d.tags[0] == 'biomass') ||
      ((filters.ocean && d.tags.length > 0) && d.tags[0] == 'ocean')
    )
    const inSource = (
      ((filters.STRP2020) && d.source.name == 'Stripe 2020 Negative Emissions Purchase') ||
      ((filters.MSFT2021) && d.source.name == 'Microsoft 2021 CDR RFP')
    )
    const inMechanism = (
      ((filters.avoided) && (d.metrics[0].avoided == 1.0)) ||
      ((filters.removal) && (d.metrics[0].avoided == 0.0))
    )
    const inSearch = ((filters.search.length > 0) && d.name.includes(filters.search))
    if ((filters.search.length > 0) && inSearch && inTags && inSource) return true
    if ((filters.search.length == 0) && inTags && inSource) return true
    else return false
  }

  return <Grid columns={[1, 1, 'minmax(400px, 30%) auto']} gap={['0px']}>
    <Sidebar filtered={filtered} data={metricsData} filters={filters} setFilters={setFilters} highlighted={highlighted}/>
    <List filtered={filtered} data={projectData} setHighlighted={setHighlighted}/>
  </Grid>
    
}

export default Main