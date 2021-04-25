import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Squares = ({ color, data, height }) => {
  const context = useThemeUI()
  const theme = context.theme

  return (
    <Box sx={{}}>
      <Box
        as='svg'
        sx={{ height: height ? height : '20px' }}
        width='90px'
        stroke='none'
        fill='none'
      >
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 0 ? 1 : 0.2 }}
          x='0'
          y='0'
          width='25'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 1 ? 1 : 0.2 }}
          x='33'
          y='0'
          width='25'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 2 ? 1 : 0.2 }}
          x='65'
          y='0'
          width='25'
          height='12'
        />
      </Box>
    </Box>
  )
}

export default Squares
