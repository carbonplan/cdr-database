import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Mechanism = ({ tag, value }) => {
  const context = useThemeUI()
  const theme = context.theme

  return (
    <Box
      sx={{
        mt: ['3px'],
      }}
    >
      <svg height='30px' width='90px' stroke='none' fill='none'>
        <Box
          as='rect'
          sx={{ fill: theme.tags[tag], opacity: 0.2 }}
          x='0'
          y='10'
          width='40'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: theme.tags[tag], opacity: 0.2 }}
          x='50'
          y='10'
          width='40'
          height='12'
        />
        {(value == 0 || value == 2) && (
          <Box
            as='text'
            sx={{ fill: theme.tags[tag], fontSize: '36px' }}
            x='7.5'
            y='29'
          >
            ↓
          </Box>
        )}
        {(value == 1 || value == 2) && (
          <>
            <Box
              as='circle'
              sx={{ strokeWidth: '2.5px', stroke: theme.tags[tag] }}
              cx='69.8'
              cy='16'
              r='7.6'
            />
            <Box
              as='line'
              sx={{ strokeWidth: '2.5px', stroke: theme.tags[tag] }}
              x1='73.8'
              y1='8.3'
              x2='65.4'
              y2='23.3'
            />
          </>
        )}
      </svg>
    </Box>
  )
}

export default Mechanism
