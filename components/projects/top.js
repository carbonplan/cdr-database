import { Flex, Box, Text } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import { Badge, Toggle, Dimmer, Icons } from '@carbonplan/components'
import { format } from 'd3-format'
import MobileFilter from './mobile-filter'

const Top = ({
  data,
  filtered,
  tooltips,
  setTooltips,
  mobileFilterExpanded,
  setMobileFilterExpanded,
}) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        height: 'fit-content',
        top: 55,
        pb: ['13px'],
        pt: '14px',
        mt: '-14px',
        mb: [2],
        ml: ['-16px', 0, 0],
        mr: ['-16px', 0, 0],
        pr: ['16px', 0, 0],
        pl: ['16px', 0, 0],
        backgroundColor: 'background',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
        borderStyle: 'solid',
        userSelect: 'none',
        zIndex: '10',
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          mt: ['-10px'],
        }}
      >
        <Box sx={{ mt: ['10px'] }}>
          <Text
            variant='label'
            sx={{
              display: 'inline-block',
              mr: [2],
              fontSize: [1],
            }}
          >
            Total
          </Text>
          <Badge sx={{ ml: [1], fontSize: [2] }}>
            {String(data.length).padStart(3, '0')}
          </Badge>
          <Text
            variant='label'
            sx={{
              display: 'inline-block',
              ml: [3],
              mr: [2],
            }}
          >
            Filtered
          </Text>
          <Badge sx={{ ml: [1] }}>
            {String(filtered.count).padStart(3, '0')}
          </Badge>
          <Box sx={{ display: ['none', 'none', 'initial'] }}>
            <Text
              variant='label'
              sx={{
                display: 'inline-block',
                ml: [3],
                mr: [2],
              }}
            >
              Volume
            </Text>
            <Badge sx={{ ml: [1] }}>
              {format('.2~s')(
                data
                  .filter((d) => filtered[d.id])
                  .map((d) => d.metrics[1].value)
                  .reduce((a, b) => a + b, 0)
              )}
            </Badge>
          </Box>
        </Box>
        <Box sx={{ mt: ['10px'] }}>
          <Box sx={{ display: 'inline-block', mt: ['-5px'] }}>
            <MobileFilter
              expanded={mobileFilterExpanded}
              setExpanded={setMobileFilterExpanded}
            />
            <Box
              sx={{
                top: '2px',
                ml: [0],
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Dimmer />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Top
