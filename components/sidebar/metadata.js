import { memo } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { Tag, Icons } from '@carbonplan/components'
import RatingPicker from './rating-picker'
import Field from './field'

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

const sources = ['STRP2020', 'MSFT2021']

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
    <Box sx={{ mr: ['24px'] }}>
      <Field label='source' tooltips={tooltips}>
        <Text variant='label'>SOURCE</Text>
        <Box sx={{}}>
          {['STRP2020', 'MSFT2021'].map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: 'primary' }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d, sources)}
            >
              {d}
            </Tag>
          ))}
        </Box>
      </Field>
      <Field label='category' tooltips={tooltips}>
        <Text variant='label'>CATEGORY</Text>
        <Box>
          {categories.map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: colors[d] }}
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
          >
            All
          </Tag>
        </Box>
      </Field>
      <Field label='mechanism' tooltips={tooltips}>
        <Text variant='label'>MECHANISM</Text>
        <Box sx={{}}>
          {['removal', 'avoided'].map((d) => (
            <Tag
              key={d}
              label={d}
              value={filters[d]}
              sx={{ color: colors[d] }}
              onClick={() => toggleOption(d)}
              onDoubleClick={() => toggleOptionUnique(d, mechanisms)}
            >
              {d}
            </Tag>
          ))}
        </Box>
      </Field>
      <Field label='rating' tooltips={tooltips}>
        <Text variant='label'>RATING</Text>
        <RatingPicker value={filters['rating']} setValue={setRating} />
      </Field>
    </Box>
  )
}

export default memo(Metadata)
