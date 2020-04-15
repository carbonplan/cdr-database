import theme from '.././theme'
import Search from './search'
import { Box, Badge, Grid, MenuButton, Text } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Filter = () => {

  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags)
  const [searchExpanded, setSearchExpanded] = useState(false)

  const addOrRemove = (tag) => {
    if (tags.includes(tag)) dispatch({ type: 'REMOVE_TAG', tag: tag })
    else dispatch({ type: 'ADD_TAG', tag: tag })
  }

  const getStyle = (tag) => {
    if (tags.includes(tag)) {
      return {
        borderColor: theme.tags[tag],
        color: theme.tags[tag],
        mr: [3]
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

  const resetTags = (e) => {
    dispatch({ type: 'RESET_TAGS'})
  }

  return (
    <Box sx={{
      py: [3],
      position: 'sticky',
      top: '56px',
      bg: 'background',
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '1px'
    }}>
      <Grid columns={[2, null, '10fr 2fr']}>
        <Box>
          <Text sx={{ whiteSpace: 'nowrap', display: 'inline-block', marginRight: '16px' }} > FILTER </Text>
          <Badge variant='primary' sx={getStyle('forests')} onClick={() => addOrRemove('forests')}>forests</Badge>
          <Badge variant='primary' sx={getStyle('dac')} onClick={() => addOrRemove('dac')}>dac</Badge>
          <Badge variant='primary' sx={getStyle('mineralization')} onClick={() => addOrRemove('mineralization')}>mineralization</Badge>
          <Badge variant='primary' sx={getStyle('soil')} onClick={() => addOrRemove('soil')}>soil</Badge>
          <Badge variant='primary' sx={getStyle('ocean')} onClick={() => addOrRemove('ocean')}>ocean</Badge>
          <Badge variant='primary' sx={getStyle('biomass')} onClick={() => addOrRemove('biomass')}>biomass</Badge>
        </Box>
        <Box>
          {/* TODO: set SVG icon for search */}
          <MenuButton aria-label='Toggle Search' onClick={() => resetTags()} />
          <MenuButton aria-label='Toggle Search' onClick={() => toggleSearch()} />
        </Box>
      </Grid>
      {searchExpanded && <Search />}
    </Box>
  )

}

export default Filter