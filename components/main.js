import { useState, useEffect } from 'react'
import { Grid, Box, Text, Input } from 'theme-ui'
import Sidebar from '../components/sidebar'
import Projects from './projects'

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

const Main = ({ projects, metrics }) => {
  const [filters, setFilters] = useState(initFilters)
  const [filtered, setFiltered] = useState({ count: 0, init: false })
  const [bounds, setBounds] = useState(initBounds)
  const [highlighted, setHighlighted] = useState(null)
  const [tooltips, setTooltips] = useState(true)
  const [mobileFilterExpanded, setMobileFilterExpanded] = useState(false)

  useEffect(() => {
    let obj = {}
    let count = 0
    projects.forEach((d) => {
      obj[d.id] = inFilter(d)
      if (obj[d.id]) {
        count += 1
      }
    })
    obj.count = count
    obj.init = true
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
      (filters.removal && d.metrics[0].value == 0) ||
      (filters.avoided && d.metrics[0].value == 1) ||
      (filters.removal && filters.avoided && d.metrics[0].value == 2)
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
    <Grid columns={[1, 1, '418px 1fr']} gap={['0px']}>
      <Sidebar
        bounds={bounds}
        setBounds={setBounds}
        filtered={filtered}
        data={metrics}
        filters={filters}
        setFilters={setFilters}
        highlighted={highlighted}
        tooltips={tooltips}
        mobileFilterExpanded={mobileFilterExpanded}
      />
      <Projects
        filters={filters}
        setFilters={setFilters}
        filtered={filtered}
        data={projects}
        setHighlighted={setHighlighted}
        tooltips={tooltips}
        setTooltips={setTooltips}
        mobileFilterExpanded={mobileFilterExpanded}
        setMobileFilterExpanded={setMobileFilterExpanded}
      />
    </Grid>
  )
}

export default Main
