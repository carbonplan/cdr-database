import { useThemeUI, Box, Text } from 'theme-ui'
import { mix } from 'polished'

const Toggle = ({ value, toggle }) => {
  const { theme } = useThemeUI()
  const { primary, background } = theme.colors

  return (
    <Box onClick={toggle} sx={{ cursor: 'pointer', display: 'inline-block' }}>
      <Box
        sx={{
          width: '50px',
          height: '20px',
          borderRadius: '20px',
          backgroundColor: value ? mix(0.4, primary, background) : 'muted',
          position: 'relative',
          transition: '0.15s',
          display: 'inline-block',
        }}
      >
        <Box
          sx={{
            width: '14px',
            height: '14px',
            borderRadius: '7px',
            position: 'absolute',
            left: value ? '32px' : '4px',
            top: '3px',
            backgroundColor: value ? mix(0.9, primary, background) : mix(0.5, primary, background),
            transition: '0.15s',
          }}
        ></Box>
      </Box>
    </Box>
  )
}

export default Toggle
