import { Box, Flex, Heading, Badge, Input, Label, Radio, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useDispatch, useSelector } from 'react-redux'
import { LiveSearch } from './search'

const Sidebar = (props) => {
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
        borderColor: tag,
        bg: alpha(tag, 0.4)
      }
    } else {
      return {
        borderColor: tag,
        bg: 'background'
      }
    }
  }

  return (
    <Box sx={{ flexGrow: 1, flexBasis: 'sidebar' }}>
      <Box sx={{ position: 'sticky', top: 0 }}>
        <Box sx={{ 
          height: '60px',
          borderStyle: 'solid', 
          borderColor: 'muted', 
          borderWidth: '0px', 
          borderBottomWidth: '1px'
        }}>
          <Box sx={{ p: [4], pt: [3] }}>
            (carbon)plan
          </Box>
        </Box>
        <Flex sx={{ 
          p: [4],
          flexDirection: 'column', 
          height: ['inherit', null, 'calc(100vh - 60px)']
        }}>
          <Box sx={{ mb: [4] }}>
            <Heading sx={{ fontSize: [3], mb: [2] }}>
              filter
            </Heading>
            <Badge variant='primary' sx={getStyle('forests')} onClick={() => addOrRemove('forests')}>forests</Badge>
            <Badge variant='primary' sx={getStyle('dac')} onClick={() => addOrRemove('dac')}>dac</Badge>
            <Badge variant='primary' sx={getStyle('mineralization')} onClick={() => addOrRemove('mineralization')}>mineralization</Badge>
            <Badge variant='primary' sx={getStyle('soil')} onClick={() => addOrRemove('soil')}>soil</Badge>
            <Badge variant='primary' sx={getStyle('ocean')} onClick={() => addOrRemove('ocean')}>ocean</Badge>
            <Badge variant='primary' sx={getStyle('biomass')} onClick={() => addOrRemove('biomass')}>biomass</Badge>
          </Box>
          <Box sx={{ mb: [4] }}>
            <Heading sx={{ fontSize: [3], mb: [2] }}>
              search
            </Heading>
            <LiveSearch></LiveSearch>
          </Box>
          <Box sx={{ mb: [2], mt: [0, null, 'auto'] }}>
            <Label onClick={e => {setColorMode('dark')}}>
              <Radio name='dark-mode' value='true' defaultChecked={true}/>
              <Text sx={{ fontSize: [2] }}>dark mode</Text>
            </Label>
            <Label onClick={e => {setColorMode('light')}}>
              <Radio name='dark-mode' value='false'/>
              <Text sx={{ fontSize: [2] }}>light mode</Text>
            </Label>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Sidebar
