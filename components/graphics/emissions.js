/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Emissions = ({ tag, removal, avoided }) => {

  const context = useThemeUI()
  const theme = context.theme

  return <Box sx={{ 
      mt: ['12px'], 
    }}>
    <svg 
      height='20px' 
      width='90px'
      stroke='none'
      fill='none'
    >
      <rect sx={{ fill: theme.tags[tag], opacity: (removal == 1) ? 1 : 0.2 }} x="0" y="0" width="40" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (avoided == 1) ? 1 : 0.2 }} x="50" y="0" width="40" height="12"/>
    </svg>
  </Box>
}

export default Emissions