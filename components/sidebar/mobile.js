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

const Mobile = ({ filters, setFilters }) => {
  const { theme } = useThemeUI()

  const [expanded, setExpanded] = useState(false)

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
        bottom: '0',
        right: '0',
        width: '100%',
        height: expanded ? '190px' : '66px',
        backgroundColor: 'background',
        borderWidth: '0px',
        borderStyle: 'solid',
        borderColor: 'muted',
        borderTopWidth: '1px',
        transition: 'height 0.15s',
      }}
    >
      {expanded && <Box sx={{ pl: [3, '24px', 0], mt: [3] }}>
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
      }
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          position: 'absolute',
          bottom: ['28px', '28px', 0],
          right: [3, '24px', 0],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
          transition: '0.15s',
          color: expanded ? 'primary' : 'secondary',
          cursor: 'pointer',
          userSelect: 'none',
          fontSize: [1],
        }}
      >
        Filter
        <Box
          sx={{
            ml: [2],
            position: 'relative',
            top: '1px',
            display: 'inline-block',
            width: '18px',
            height: '14px',
            transition: '0.15s',
            stroke: expanded ? theme.colors.primary : theme.colors.secondary,
          }}
        >
          <svg id='icon' viewBox='0 0 18 14'>
            <line
              x1='1'
              x2='17'
              y1='1'
              y2='1'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <line
              x1='3'
              x2='15'
              y1='5'
              y2='5'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <line
              x1='5'
              x2='12'
              y1='9'
              y2='9'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <line
              x1='7'
              x2='10'
              y1='13'
              y2='13'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Mobile
