import theme from '.././theme'
import Methods from './methods'
import Summary from './summary'
import { Box } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = ({ projects }) => {
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
        bg: alpha(theme.tags[tag], 0.5)
      }
    } else {
      return {
        borderColor: theme.tags[tag],
        bg: alpha(theme.tags[tag], 0.1)
      }
    }
  }

  return (
    <Box>
    <Box sx={{ 
      position: 'fixed',
      top: '56px',
      borderStyle: 'solid', 
      borderColor: 'muted',
      borderWidth: '0px',
      borderLeftWidth: '1px',
      display: ['none', 'none', 'inherit'],
      mr: [5]
    }}>
      <Summary projects={ projects }></Summary>
      <Methods></Methods>
    </Box>
    </Box>
  )
}

export default Sidebar