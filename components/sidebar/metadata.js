import { memo, useMemo, useCallback } from 'react'
import { Box } from 'theme-ui'
import { Filter, Tag } from '@carbonplan/components'
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
const years = ['2020', '2021']
const sources = ['stripe', 'microsoft']

const mechanisms = ['removal', 'avoided']

const filterGroups = {
  categories,
  sources,
  years,
  mechanisms,
}

const useFilterGroups = (filters) => {
  return useMemo(() => {
    const result = {}
    for (const group in filterGroups) {
      result[group] = filterGroups[group].reduce((obj, key) => {
        obj[key] = filters[key]
        return obj
      }, {})
    }

    return result
  }, [filters])
}
const Metadata = ({ filters: combinedFilters, setFilters, tooltips }) => {
  const filters = useFilterGroups(combinedFilters)

  const toggleOption = useCallback((updatedFilters) => {
    setFilters((filters) => {
      return { ...filters, ...updatedFilters }
    })
  })

  const setRating = useCallback((value) => {
    setFilters((filters) => {
      return { ...filters, ['rating']: value }
    })
  })

  return (
    <Box sx={{ mb: [-3, -3, 0, 0], pb: [0, 0, 0, 1] }}>
      <Field label='categoryFilter' displayLabel='category' tooltips={tooltips}>
        <Filter
          values={filters.categories}
          setValues={toggleOption}
          colors={colors}
          multiSelect
          showAll
        />
      </Field>
      <Field label='sourceFilter' displayLabel='source' tooltips={tooltips}>
        <Filter values={filters.sources} setValues={toggleOption} multiSelect />
      </Field>
      <Field label='yearFilter' displayLabel='year' tooltips={tooltips}>
        <Filter values={filters.years} setValues={toggleOption} multiSelect />
      </Field>
      <Field
        label='mechanismRating'
        displayLabel='mechanism'
        tooltips={tooltips}
      >
        <Filter
          values={filters.mechanisms}
          setValues={toggleOption}
          multiSelect
        />
      </Field>
      <Field label='ratingFilter' displayLabel='rating' tooltips={tooltips}>
        <RatingPicker value={combinedFilters['rating']} setValue={setRating} />
      </Field>
    </Box>
  )
}

export default memo(Metadata)
