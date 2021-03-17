import { useState } from 'react'
import { useThemeUI, Box, Text } from 'theme-ui'
import { Tag } from '@carbonplan/components'
import RatingPicker from './rating-picker'

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

const Mobile = ({ filters, setFilters, expanded }) => {
  const { theme } = useThemeUI()

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
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: expanded ? '190px' : '0px',
          backgroundColor: 'background',
          borderWidth: '0px',
          borderStyle: 'solid',
          borderColor: 'muted',
          borderTopWidth: expanded ? '1px' : '0px',
          transition: 'height 0.15s',
        }}
      >
        <Box sx={{ pl: [3, '24px', 0], mt: [3] }}>
          <Text variant='label' sx={{ mb: [1] }}>
            CATEGORY
          </Text>
          <Box sx={{ maxWidth: '300px' }}>
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
          <Text variant='label' sx={{ mt: [3], mb: [1] }}>
            RATING
          </Text>
          <RatingPicker value={filters['rating']} setValue={setRating} />
        </Box>
      </Box>
    </Box>
  )
}

export default Mobile
