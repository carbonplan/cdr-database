import { Box, Heading, Badge, Input, Label, Radio, Text } from 'theme-ui'
import { connect } from 'react-redux'
import { useColorMode } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags)

  const addOrRemove = (tag) => {
    if (tags.includes(tag)) dispatch({ type: 'REMOVE_TAG', tag: tag })
    else dispatch({ type: 'ADD_TAG', tag: tag })
  }

  const getVariant = (tag) => {
    return tags.includes(tag) ? 'selected' : 'primary'
  }

  return (
    <Box sx={{ flexGrow: 1, flexBasis: 'sidebar' }}>
      <Box sx={{ position: 'sticky', top: 0 }}>
        <Box sx={{ 
          height: '60px',
          borderStyle: 'solid', 
          borderColor: 'primary', 
          borderWidth: '0px', 
          borderBottomWidth: '1px'
        }}>
          <Box sx={{ p: [4], pt: [3] }}>
            (carbon)plan
          </Box>
        </Box>
        <Box sx={{ p: [4] }}>
          <Box sx={{ mb: [4] }}>
            <Heading sx={{ fontSize: [3], mb: [2] }}>
              filter
            </Heading>
            <Badge variant={getVariant('forests')} onClick={() => addOrRemove('forests')}>forests</Badge>
            <Badge variant={getVariant('DAC')} onClick={() => addOrRemove('DAC')}>DAC</Badge>
            <Badge variant={getVariant('mineralization')} onClick={() => addOrRemove('mineralization')}>mineralization</Badge>
            <Badge variant={getVariant('soil')} onClick={() => addOrRemove('soil')}>soil</Badge>
            <Badge variant={getVariant('ocean')} onClick={() => addOrRemove('ocean')}>ocean</Badge>
            <Badge variant={getVariant('biomass')} onClick={() => addOrRemove('biomass')}>biomass</Badge>
          </Box>
          <Box sx={{ mb: [4] }}>
            <Heading sx={{ fontSize: [3], mb: [2] }}>
              search
            </Heading>
            <Input></Input>
          </Box>
          <Box sx={{ mb: [4] }}>
            <Label onClick={e => {setColorMode('dark')}}>
              <Radio name='dark-mode' value='true' defaultChecked={true}/>
              <Text sx={{ fontSize: [2] }}>dark mode</Text>
            </Label>
            <Label onClick={e => {setColorMode('light')}}>
              <Radio name='dark-mode' value='false'/>
              <Text sx={{ fontSize: [2] }}>light mode</Text>
            </Label>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar