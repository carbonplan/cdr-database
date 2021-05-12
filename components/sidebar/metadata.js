import { memo } from 'react'
import { Box, Grid } from 'theme-ui'
import { Tag, Icons, Column, Tray } from '@carbonplan/components'
import RatingPicker from './rating-picker'
import Field from './field'
import sx from '../styles'

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

const sources = ['stripe', 'microsoft']
const sourcesDisplay = {
  stripe: 'STRIPE',
  microsoft: 'MICROSOFT',
}

const mechanisms = ['avoided', 'removal']

const Metadata = ({
  filters,
  setFilters,
  tooltips,
  selectedTooltips,
  setSelectedTooltips,
}) => {
  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  function toggleOptionUnique(value, list) {
    let updated = {}
    list.forEach((d) => {
      updated[d] = value === d ? true : false
    })
    setFilters((filters) => {
      return {
        ...filters,
        ...updated,
      }
    })
  }

  function toggleAll(list) {
    let updated = {}
    if (isAll(list)) {
      list.forEach((d) => {
        updated[d] = false
      })
    } else {
      list.forEach((d) => {
        updated[d] = true
      })
    }

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

  function isAll(list) {
    let check = 0
    list.forEach((d) => {
      if (filters[d]) check += 1
    })
    return check == categories.length
  }

  return (
    <Box sx={{ mb: [-3, -3, 0, 0], pb: [0, 0, 0, 1] }}>
      <Field label='sourceFilter' displayLabel='source' tooltips={tooltips}>
        <Box sx={{}}>
          {sources.map((d) => (
            <Tag
              key={d}
              value={filters[d]}
              sx={{ color: 'primary', mr: [2], mb: [1], mt: [0, 0, 0, '2px'] }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d, sources)}
            >
              {sourcesDisplay[d]}
            </Tag>
          ))}
        </Box>
      </Field>
      <Field label='categoryFilter' displayLabel='category' tooltips={tooltips}>
        <Box>
          {categories.map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: colors[d], mr: [2], mb: [1], mt: [0, 0, 0, '2px'] }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d, categories)}
            >
              {d}
            </Tag>
          ))}
          <Tag
            label={'all'}
            value={isAll(categories)}
            onClick={() => toggleAll(categories)}
            sx={{ mb: [1], mt: [0, 0, 0, '2px'] }}
          >
            All
          </Tag>
        </Box>
      </Field>
      <Field
        label='mechanismRating'
        displayLabel='mechanism'
        tooltips={tooltips}
      >
        <Box sx={{}}>
          {['removal', 'avoided'].map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: 'primary', mr: [2], mb: [1], mt: [0, 0, 0, '2px'] }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d, mechanisms)}
            >
              {d}
            </Tag>
          ))}
        </Box>
      </Field>
      <Field label='ratingFilter' displayLabel='rating' tooltips={tooltips}>
        <RatingPicker value={filters['rating']} setValue={setRating} />
      </Field>
    </Box>
  )
}

export default memo(Metadata)
