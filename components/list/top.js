import { Flex, Box, Text } from 'theme-ui'
import AnimateHeight from 'react-animate-height'
import { Badge, Toggle, Dimmer, Icons } from '@carbonplan/components'
import { format } from 'd3-format'
import glossary from '../../glossary'

const Top = ({ data, filtered, tooltips, setTooltips }) => {
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
        ml: [0],
        backgroundColor: 'background',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
        borderStyle: 'solid',
      }}
    >
      <Flex
        sx={{ justifyContent: 'space-between', flexWrap: 'wrap', rowGap: [3] }}
      >
        <Box>
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
            Selected
          </Text>
          <Badge sx={{ ml: [1] }}>
            {String(filtered.count).padStart(3, '0')}
          </Badge>
          <Box sx={{ display: ['none', 'initial', 'initial'] }}>
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
        <Box sx={{ display: 'inline-block', mt: ['-5px'] }}>
          <Box sx={{ display: ['none', 'initial', 'initial'], mr: [4] }}>
            <Toggle
              value={tooltips.show}
              onClick={() => {
                setTooltips({
                  show: !tooltips.show,
                  selected: tooltips.selected,
                })
                setTimeout(() => {
                  setTooltips({ show: !tooltips.show, selected: null })
                }, 150)
              }}
              sx={{ mr: [3] }}
            />
            <Text
              variant='label'
              sx={{
                position: 'relative',
                top: '-5px',
                display: 'inline-block',
              }}
            >
              SHOW TOOLTIPS
            </Text>
          </Box>
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
      </Flex>
      <AnimateHeight
        duration={100}
        height={tooltips.show ? 'auto' : 0}
        easing={'linear'}
      >
        <Box sx={{ mt: [1] }}>
          <Text
            sx={{
              color: 'secondary',
              fontSize: [2],
              pt: [2],
              pb: [1],
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            {tooltips.selected && (
              <Text>
                <Text as='span' sx={{ color: 'text' }}>
                  {capitalize(tooltips.selected) + ': '}
                </Text>
                <Text as='span'>{glossary[tooltips.selected]}</Text>
              </Text>
            )}
            {!tooltips.selected && (
              <Box>
                Click a{' '}
                <Icons.Info
                  closed={true}
                  sx={{
                    color: 'secondary',
                    position: 'relative',
                    width: 16,
                    height: 16,
                    top: '2px',
                    mr: ['2px'],
                    ml: ['2px'],
                    display: 'inline-block',
                  }}
                />{' '}
                to learn more about a term or concept.
              </Box>
            )}
          </Text>
        </Box>
      </AnimateHeight>
    </Box>
  )
}

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Top
