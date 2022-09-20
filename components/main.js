import { useState, useEffect } from 'react'
import { Grid, Box, Text, Input } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Sidebar from '../components/sidebar'
import Projects from './projects'

const initFilters = {
  forests: true,
  dac: true,
  mineralization: true,
  soil: true,
  biomass: true,
  ocean: true,
  stripe: true,
  microsoft: true,
  avoided: true,
  removal: true,
  storage: true,
  group: false,
  2020: true,
  2021: true,
  search: '',
  rating: 3,
}

const initBounds = {
  volume: [],
  permanence: [],
}

const near = (a, b) => {
  return Math.abs(a - b) < 0.000001
}

const Main = ({ projects, metrics, settingsExpanded }) => {
  const [filters, setFilters] = useState(initFilters)
  const [filtered, setFiltered] = useState({ count: 0, init: false })
  const [bounds, setBounds] = useState(initBounds)
  const [highlighted, setHighlighted] = useState(null)
  const [tooltips, setTooltips] = useState(true)

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
      ((near(value, bounds[0]) || value > bounds[0]) &&
        (near(value, bounds[1]) || value < bounds[1])) ||
      ((near(max, bounds[1]) || bounds[1] > max) && value >= max) ||
      ((near(min, bounds[0]) || bounds[0] < min) && value <= min)
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
      (filters.stripe && d.source.id.includes('STRP')) ||
      (filters.microsoft && d.source.id.includes('MSFT'))
    const inYear =
      (filters['2020'] && d.source.date.includes('2020')) ||
      (filters['2021'] && d.source.date.includes('2021'))
    const inMechanism =
      (filters.removal && d.metrics[0].value == 0) ||
      (filters.avoided && d.metrics[0].value == 1) ||
      (filters.removal && filters.avoided && d.metrics[0].value == 2) ||
      d.metrics[0].value == 3
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
        d.source.name.toLowerCase().includes(searchTerm) ||
        (d.tags.length > 1 && d.tags[1].toLowerCase().includes(searchTerm)))
    const isValidated = d.rating >= filters.rating
    const inFilter =
      inTags && inSource && inYear && inBounds && inMechanism && isValidated
    if (filters.search.length > 0 && inSearch && inFilter) return true
    if (filters.search.length == 0 && inFilter) return true
    else return false
  }

  return (
    <Row sx={{ mb: [-8, -8, -9, -10] }}>
      <Column start={[1, 2, 1, 1]} width={[6, 6, 4, 4]}>
        <Sidebar
          bounds={bounds}
          setBounds={setBounds}
          filtered={filtered}
          data={metrics}
          filters={filters}
          setFilters={setFilters}
          highlighted={highlighted}
          tooltips={tooltips}
          settingsExpanded={settingsExpanded}
        />
      </Column>
      <Column start={[1, 2, 5, 5]} width={[6, 6, 8, 8]}>
        <Projects
          filters={filters}
          setFilters={setFilters}
          filtered={filtered}
          data={projects}
          setHighlighted={setHighlighted}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Column>
    </Row>
  )
}

export default Main
