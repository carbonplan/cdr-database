import { Flex, Box } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import { Badge, Toggle, Dimmer, Icons, FadeIn } from '@carbonplan/components'
import { format } from 'd3-format'
import sx from '../styles'

const Top = ({ data, filtered, tooltips, setTooltips }) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        height: '58px',
        top: 56,
        pb: ['26px'],
        mb: [0],
        pt: [2],
        ml: ['-16px', 0, 0],
        mr: ['-16px', 0, 0],
        pr: ['16px', 0, 0],
        pl: ['16px', 0, 0],
        bg: 'background',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
        borderStyle: 'solid',
        userSelect: 'none',
        zIndex: 1,
      }}
    >
      <Box sx={{ mt: ['8px'] }}>
        <Box
          sx={{
            display: 'inline-block',
            mr: [2],
            fontSize: [1],
            ...sx.label,
          }}
        >
          Total
        </Box>
        <Box sx={{ display: 'inline-block', width: '40px' }}>
          {filtered.init && (
            <FadeIn as='span' delay={10} duration={150}>
              <Badge sx={{ ml: [1], fontSize: [2] }}>
                {String(data.length).padStart(3, '0')}
              </Badge>
            </FadeIn>
          )}
        </Box>
        <Box
          sx={{
            display: 'inline-block',
            ml: [3, 4, 4, 4],
            mr: [2],
            ...sx.label,
          }}
        >
          Filtered
        </Box>
        <Box sx={{ display: 'inline-block', width: '40px' }}>
          {filtered.init && (
            <FadeIn as='span' delay={10} duration={150}>
              <Badge sx={{ ml: [1] }}>
                {String(filtered.count).padStart(3, '0')}
              </Badge>
            </FadeIn>
          )}
        </Box>
        <Box
          sx={{
            display: 'inline-block',
            ml: [3, 4, 4, 4],
            mr: [2],
            ...sx.label,
          }}
        >
          Volume
        </Box>
        <Box sx={{ display: 'inline-block', width: '40px' }}>
          {filtered.init && (
            <FadeIn as='span' delay={10} duration={150}>
              <Badge sx={{ ml: [1] }}>
                {format('.2~s')(
                  data
                    .filter((d) => filtered[d.id])
                    .map((d) => d.metrics[1].value)
                    .reduce((a, b) => a + b, 0)
                )}
              </Badge>
            </FadeIn>
          )}
        </Box>
      </Box>
    </Box>
  )
}

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Top
