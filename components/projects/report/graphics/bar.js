import { Box } from 'theme-ui'
import { scaleLinear, scaleLog } from 'd3-scale'
import { useThemeUI } from 'theme-ui'

const Bar = ({ tag, data, scale }) => {
  const context = useThemeUI()
  const theme = context.theme

  const x = scale.type == 'log' ? scaleLog() : scaleLinear()
  const width = x.domain([scale.min, scale.max]).range([0, 90])(data)

  return (
    <Box
      sx={{
        mt: ['13px'],
      }}
    >
      <svg height='20px' width='90px' stroke='none' fill='none'>
        <Box
          as='rect'
          sx={{ fill: theme.tags[tag], opacity: 0.2 }}
          x='0'
          y='0'
          width='100'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: theme.tags[tag], opacity: 1 }}
          x='0'
          y='0'
          width={width}
          height='12'
        />
      </svg>
    </Box>
  )
}

export default Bar
