import AnimateHeight from 'react-animate-height'
import { useThemeUI, Box, Grid, Divider, Text } from 'theme-ui'
import { Expander, Icons } from '@carbonplan/components'

const { Check } = Icons

const sx = {
  comment: {
    fontFamily: 'faux',
    fontSize: [1],
    color: 'secondary',
    letterSpacing: 'faux',
    lineHeight: 'small',
    mt: [0],
    mb: [2],
  },
  value: {
    fontFamily: 'mono',
    fontSize: [3],
    textAlign: 'right',
    mt: ['5px'],
  },
  label: {
    fontFamily: 'mono',
    fontSize: [2],
    mt: ['6px'],
    textTransform: 'capitalize',
  },
  units: {
    fontFamily: 'mono',
    color: 'secondary',
    fontSize: [1],
    ml: [2],
    textTransform: 'normal',
  },
  rating: {
    display: 'inline-block',
    ml: [3],
    fontSize: ['18px'],
  },
}

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
        <Grid id='grid' columns={['1fr 50px 30px']}>
          <Text>
            <Text sx={{ ...sx.label, mb: [1], display: 'inline-block' }}>
              {metric.name}
            </Text>
            {hasUnits && (
              <Text sx={{ ...sx.units, display: 'inline-block' }}>
                {metric.units}
              </Text>
            )}
          </Text>
          {metric.rating === 1 && (
            <Check
              sx={{
                position: 'relative',
                ml: [0],
                top: ['8px'],
                width: 28,
                color: theme.tags[tag],
              }}
            />
          )}
          {!(metric.rating === 1) && <Box />}
          {hasDetails && (
            <Box id='container' sx={{ mt: ['10px'], ml: ['-5px'] }}>
              <Expander
                id={'expander'}
                toggle={toggle}
                expanded={expanded}
              ></Expander>
            </Box>
          )}
        </Grid>
        <Text
          sx={{
            ...sx.value,
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
                fontFamily: 'mono',
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
                fontFamily: 'mono',
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
                fontFamily: 'mono',
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
                    sx={{
                      ...sx.comment,
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
                    sx={{
                      ...sx.comment,
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
                    sx={{
                      ...sx.comment,
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
                    sx={{
                      ...sx.comment,
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
