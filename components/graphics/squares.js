/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import * as d3 from 'd3-scale'
import { useThemeUI } from 'theme-ui'

const Squares = ({ tag, data }) => {

  const context = useThemeUI()
  const theme = context.theme

  return <Box sx={{ 
      mt: ['13px'], 
    }}>
    <svg 
      height='20px' 
      width='90px'
      stroke='none'
      fill='none'
    >
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 0) ? 1 : 0.2 }} x="0" y="0" width="25" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 1) ? 1 : 0.2 }} x="33" y="0" width="25" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 2) ? 1 : 0.2 }} x="65" y="0" width="25" height="12"/>
    </svg>
  </Box>
}

export default Squares