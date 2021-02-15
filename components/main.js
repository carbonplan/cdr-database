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
  rating: 3,
}

const initBounds = {
  volume: [],
  permanence: [],
}

const initTooltips = {
  show: false,
  selected: null,
}

const Main = ({ projectData, metricsData }) => {
  const [filters, setFilters] = useState(initFilters)
  const [filtered, setFiltered] = useState({ count: 0 })
  const [bounds, setBounds] = useState(initBounds)
  const [highlighted, setHighlighted] = useState(null)
  const [tooltips, setTooltips] = useState(initTooltips)

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

  function checkBounds(value, bounds, min, max) {
    if (bounds.length == 0) return true
    return (
      (value > bounds[0] && value < bounds[1]) ||
      (bounds[1] === max && value >= max) ||
      (bounds[0] === min && value <= min)
    )
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
      (filters.avoided &&
        d.metrics[0].avoided == 1.0 &&
        d.metrics[0].removal == 0.0) ||
      (filters.removal &&
        d.metrics[0].removal == 1.0 &&
        d.metrics[0].avoided == 0.0) ||
      (filters.removal &&
        filters.avoided &&
        (d.metrics[0].removal == 1.0 || d.metrics[0].avoided == 1.0))
    const inBounds =
      checkBounds(d.metrics[1].value, bounds.volume, 10, 1000000) &&
      checkBounds(d.metrics[3].value, bounds.permanence, 1, 1000)
    const searchTerm = filters.search.toLowerCase()
    const inSearch =
      searchTerm.length > 0 &&
      (d.applicant.toLowerCase().includes(searchTerm) ||
        d.keywords.toLowerCase().includes(searchTerm) ||
        d.location.name.toLowerCase().includes(searchTerm) ||
        d.tags[0].toLowerCase().includes(searchTerm) ||
        (d.tags.length > 1 && d.tags[1].toLowerCase().includes(searchTerm)))
    const isValidated = d.rating >= filters.rating
    const inFilter =
      inTags && inSource && inBounds && inMechanism && isValidated
    if (filters.search.length > 0 && inSearch && inFilter) return true
    if (filters.search.length == 0 && inFilter) return true
    else return false
  }

  return (
    <Grid columns={[1, 1, 'minmax(405px, 30%) auto']} gap={['0px']}>
      <Sidebar
        bounds={bounds}
        setBounds={setBounds}
        filtered={filtered}
        data={metricsData}
        filters={filters}
        setFilters={setFilters}
        highlighted={highlighted}
        tooltips={tooltips}
        setTooltips={setTooltips}
      />
      <List
        filters={filters}
        setFilters={setFilters}
        filtered={filtered}
        data={projectData}
        setHighlighted={setHighlighted}
        tooltips={tooltips}
        setTooltips={setTooltips}
      />
    </Grid>
  )
}

export default Main
