import theme from '.././theme'
import Search from './search'
import { Box, Badge, Grid, IconButton, Text } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Filter = () => {

  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags)
  const allTags = ['forests', 'dac', 'mineralization', 'soil', 'ocean', 'biomass']
  const [searchExpanded, setSearchExpanded] = useState(false)

  const addOrRemove = (tag) => {
    if (tags.includes(tag)) dispatch({ type: 'REMOVE_TAG', tag: tag })
    else dispatch({ type: 'ADD_TAG', tag: tag })
  }

  const toggleAll = () => {
    if (tags.length === allTags.length) {
      allTags.forEach((tag) => dispatch({ type: 'REMOVE_TAG', tag: tag }))
    } else {
      allTags.forEach((tag) => dispatch({ type: 'ADD_TAG', tag: tag }))
    }
  }

  const getStyle = (tag) => {
    if (tags.includes(tag)) {
      return {
        borderColor: theme.tags[tag],
        color: theme.tags[tag],
        mr: [3]
      }
    } else if (tag === 'all') {
      if (tags.length == 6) {
        return {
          borderColor: 'primary',
          color: 'primary',
          mr: [3]
        }
      } else {
        return {
          borderColor: alpha('primary', 0.2),
          color: alpha('primary', 0.2),
          mr: [3]
        }
      }
    } else {
      return {
        borderColor: alpha(theme.tags[tag], 0.2),
        color: alpha(theme.tags[tag], 0.2),
        mr: [3]
      }
    }
  }

  const toggleSearch = (e) => {
    setSearchExpanded(!searchExpanded)
  }

  return (
    <Box sx={{
      py: [3],
      pr: [4],
      position: 'sticky',
      top: '56px',
      bg: 'background',
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      zIndex: 1000
    }}>
      <Grid columns={[1, null, '1fr 30px']}>
        <Box>
          <Badge variant='primary' sx={getStyle('forests')} onClick={() => addOrRemove('forests')}>forests</Badge>
          <Badge variant='primary' sx={getStyle('dac')} onClick={() => addOrRemove('dac')}>dac</Badge>
          <Badge variant='primary' sx={getStyle('mineralization')} onClick={() => addOrRemove('mineralization')}>mineralization</Badge>
          <Badge variant='primary' sx={getStyle('soil')} onClick={() => addOrRemove('soil')}>soil</Badge>
          <Badge variant='primary' sx={getStyle('ocean')} onClick={() => addOrRemove('ocean')}>ocean</Badge>
          <Badge variant='primary' sx={getStyle('biomass')} onClick={() => addOrRemove('biomass')}>biomass</Badge>
          <Badge variant='primary' sx={getStyle('all')} onClick={() => toggleAll()}>all</Badge>
        </Box>
        <Box sx={{ display: ['none','none','inherit'] }}>
          <IconButton aria-label='Toggle Search' onClick={() => toggleSearch()} 
            sx={{ 
              stroke: searchExpanded ? 'text' : 'secondary', 
              fill: 'background',
              cursor: 'pointer',
              transition: '0.25s all',
              '&:hover': {
                stroke: 'text'
              }
            }}
          >
            <svg height='24px' width='24px' strokeWidth='2'>
              <circle cx="15" cy="9.1" r="6.8"/>
              <line x1="2.4" y1="21.7" x2="10.2" y2="13.9"/>
            </svg>
          </IconButton>
        </Box>
      </Grid>
      <Grid columns={[2, null, '1fr 200px']}>
      <Box></Box>
      <Box sx={{pr: [1]}}>
      {searchExpanded && <Search />}
      </Box>
      </Grid>
    </Box>
  )

}

export default Filter