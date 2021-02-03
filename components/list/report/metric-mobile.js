import AnimateHeight from 'react-animate-height'
import { useThemeUI, Box, Grid, Divider, Text } from 'theme-ui'
import { Expander, Icons } from '@carbonplan/components'

const { Check } = Icons

const MetricMobile = ({
  metric,
  toggle,
  expanded,
  hasDetails,
  hasUnits,
  tag,
  format,
  duration,
}) => {
  const { theme } = useThemeUI()

  return (
    <Box>
      <Box
        onClick={toggle}
        sx={{
          cursor: hasDetails ? 'pointer' : 'default',
          pointerEvents: hasDetails ? 'all' : 'none',
          '&:hover > #grid > #container > #expander': {
            fill: 'primary',
            stroke: 'primary',
          },
          pt: [2],
          pb: [3],
        }}
      >
        <Grid id='grid' columns={['1fr 30px']}>
          <Text>
            <Text variant='metric.label' sx={{ display: 'inline-block' }}>
              {metric.name}
            </Text>
            {hasUnits && (
              <Text variant='metric.units' sx={{ display: 'inline-block' }}>
                {metric.units}
              </Text>
            )}
            {metric.rating === 1 && <Check color={theme.tags[tag]} />}
          </Text>
          {hasDetails && (
            <Box id='container' sx={{ ml: ['-5px'] }}>
              <Expander
                id={'expander'}
                toggle={toggle}
                expanded={expanded}
              ></Expander>
            </Box>
          )}
        </Grid>
        <Text
          variant='metric.value'
          sx={{
            color: theme.tags[tag],
            textAlign: ['left'],
            fontSize: [4],
            mt: ['-2px'],
          }}
        >
          {format(metric.name, metric.value)}
        </Text>
        <Box>
          {metric.name == 'mechanism' && (
            <Text
              sx={{
                color: theme.tags[tag],
                fontFamily: 'monospace',
                letterSpacing: 'mono',
                fontSize: [4],
              }}
            >
              {metric.removal && metric.avoided ? 'REMOVAL + AVOIDED' : ''}
              {metric.removal && !metric.avoided ? 'REMOVAL ONLY' : ''}
              {!metric.removal && metric.avoided ? 'AVOIDED ONLY' : ''}
            </Text>
          )}
          {metric.name == 'additionality' && (
            <Text
              sx={{
                color: theme.tags[tag],
                fontFamily: 'monospace',
                letterSpacing: 'mono',
                fontSize: [4],
              }}
            >
              {metric.value + 1}
              <Text sx={{ color: 'text', display: 'inline-block' }}>/</Text>3
            </Text>
          )}
          {metric.name == 'specificity' && (
            <Text
              sx={{
                color: theme.tags[tag],
                fontFamily: 'monospace',
                letterSpacing: 'mono',
                fontSize: [4],
              }}
            >
              {metric.value + 1}
              <Text sx={{ color: 'text', display: 'inline-block' }}>/</Text>3
            </Text>
          )}
        </Box>
      </Box>
      <AnimateHeight
        duration={duration}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box sx={{ pb: [1] }}>
            <Box
              sx={{
                mt: metric.notes || metric.comment ? [0] : [0],
                mb: metric.notes || metric.comment ? [3] : [0],
              }}
            >
              {metric.notes && (
                <Box>
                  <Text
                    variant='metric.comment'
                    sx={{
                      color: theme.tags[tag],
                      textAlign: ['left', 'left', 'right'],
                      mr: [2],
                      ml: [0],
                      mt: [0],
                    }}
                  >
                    NOTES
                  </Text>
                  <Text
                    variant='metric.comment'
                    sx={{
                      ml: [0],
                    }}
                  >
                    {metric.notes}
                  </Text>
                </Box>
              )}
              <Box
                sx={{
                  mt: metric.notes && metric.comment ? [3] : [0],
                }}
              ></Box>
              {metric.comment && (
                <Box>
                  <Text
                    variant='metric.comment'
                    sx={{
                      color: theme.tags[tag],
                      textAlign: ['left'],
                      mr: [2],
                      ml: [0],
                      mt: [0],
                    }}
                  >
                    COMMENT
                  </Text>
                  <Text
                    variant='metric.comment'
                    sx={{
                      ml: [0],
                    }}
                  >
                    {metric.comment}
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </AnimateHeight>
      <Divider sx={{ mr: [0, 0, 2], mt: [0], mb: [0] }} />
    </Box>
  )
}

export default MetricMobile
