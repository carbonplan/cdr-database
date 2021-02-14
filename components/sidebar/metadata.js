import { memo } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { Tag, Icons } from '@carbonplan/components'
import Rating from './rating'
import Tooltip from '../tooltip'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange',
}

const categories = [
  'forests',
  'soil',
  'biomass',
  'ocean',
  'mineralization',
  'dac',
]

const Metadata = ({ filters, setFilters, tooltips, setTooltips }) => {
  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  function toggleOptionUnique(value) {
    let updated = {}
    categories.forEach((d) => {
      updated[d] = value === d ? true : false
    })
    setFilters((filters) => {
      return {
        ...filters,
        ...updated,
      }
    })
  }

  function toggleAll() {
    let updated = {}
    categories.forEach((d) => {
      updated[d] = true
    })
    setFilters((filters) => {
      return {
        ...filters,
        ...updated,
      }
    })
  }

  function setRating(value) {
    setFilters((filters) => {
      return { ...filters, ['rating']: value }
    })
  }

  function isAll() {
    let check = 0
    categories.forEach((d) => {
      if (filters[d]) check += 1
    })
    return check == categories.length
  }

  return (
    <Box sx={{ mr: ['24px'] }}>
      <Grid columns={['100px 1fr 16px']}>
        <Text variant='label'>SOURCE</Text>
        <Box sx={{}}>
          {['STRP2020', 'MSFT2021'].map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: 'primary' }}
              onClick={() => toggleOption(d)}
            >
              {d}
            </Tag>
          ))}
        </Box>
        <Tooltip
          value={'source'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
      <Grid columns={['100px 1fr 16px']}>
        <Text variant='label'>CATEGORY</Text>
        <Box>
          {categories.map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: colors[d] }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d)}
            >
              {d}
            </Tag>
          ))}
          <Tag label={'all'} value={isAll()} onClick={() => toggleAll()}>
            All
          </Tag>
        </Box>
        <Tooltip
          value={'category'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
      <Grid columns={['100px 1fr 16px']}>
        <Text variant='label'>MECHANISM</Text>
        <Box sx={{}}>
          {['removal', 'avoided'].map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: colors[d] }}
              onClick={() => toggleOption(d)}
            >
              {d}
            </Tag>
          ))}
        </Box>
        <Tooltip
          value={'mechanism'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
      <Grid columns={['100px 1fr 16px']}>
        <Text variant='label'>RATING</Text>
        <Rating value={filters['rating']} setValue={setRating} />
        <Tooltip
          value={'rating'}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Grid>
    </Box>
  )
}

export default memo(Metadata)
