import { useThemeUI, Box } from 'theme-ui'

const MobileFilter = ({ expanded, setExpanded }) => {
  const { theme } = useThemeUI()
  return (
    <Box
      onClick={() => setExpanded(!expanded)}
      sx={{
        display: ['inline-block', 'inline-block', 'none'],
        fontFamily: 'mono',
        letterSpacing: 'mono',
        textTransform: 'uppercase',
        color: expanded ? 'primary' : 'secondary',
        cursor: 'pointer',
        userSelect: 'none',
        fontSize: [1],
        mr: [2],
        px: [2],
        pt: [2],
        top: ['-3px'],
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: '1px',
          display: 'inline-block',
          width: '20px',
          height: '16px',
          transition: '0.15s',
          stroke: expanded ? theme.colors.primary : theme.colors.secondary,
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              stroke: theme.colors.primary,
            },
          },
        }}
      >
        <svg id='icon' viewBox='0 0 18 14'>
          <line
            x1='1'
            x2='17'
            y1='1'
            y2='1'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <line
            x1='3'
            x2='15'
            y1='5'
            y2='5'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <line
            x1='5'
            x2='12'
            y1='9'
            y2='9'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <line
            x1='7'
            x2='10'
            y1='13'
            y2='13'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </Box>
    </Box>
  )
}

export default MobileFilter
