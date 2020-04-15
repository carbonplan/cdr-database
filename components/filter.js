import theme from '.././theme'
import About from './about'
import Summary from './summary'
import Search from './search'
import { Box, Flex, Heading, Badge, Input, Label, Radio, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {

  const [colorMode, setColorMode] = useColorMode()
  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags)

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
      <Badge variant='primary' sx={getStyle('forests')} onClick={() => addOrRemove('forests')}>forests</Badge>
      <Badge variant='primary' sx={getStyle('dac')} onClick={() => addOrRemove('dac')}>dac</Badge>
      <Badge variant='primary' sx={getStyle('mineralization')} onClick={() => addOrRemove('mineralization')}>mineralization</Badge>
      <Badge variant='primary' sx={getStyle('soil')} onClick={() => addOrRemove('soil')}>soil</Badge>
      <Badge variant='primary' sx={getStyle('ocean')} onClick={() => addOrRemove('ocean')}>ocean</Badge>
      <Badge variant='primary' sx={getStyle('biomass')} onClick={() => addOrRemove('biomass')}>biomass</Badge>
    </Box>
  )

}

export default Filter