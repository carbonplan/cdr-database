import AnimateHeight from 'react-animate-height'
import { useThemeUI, Box, Grid, Divider, Text } from 'theme-ui'
import { Expander } from '@carbonplan/components'
import { Check } from '@carbonplan/icons'
import Rating from '../graphics/rating'
import Squares from '../graphics/squares'

const sx = {
  comment: {
    fontFamily: 'faux',
    fontSize: [1],
    color: 'secondary',
    letterSpacing: 'faux',
    lineHeight: 'small',
    mt: [0],
    mb: [2],
    wordBreak: 'break-word',
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
        onClick={hasDetails ? toggle : (e) => e.stopPropagation()}
        sx={{
          cursor: hasDetails ? 'pointer' : 'default',
          pointerEvents: 'all',
          '#grid > #container > #expander': {
            stroke: expanded ? 'primary' : 'secondary',
          },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover > #grid > #container #expander': {
              stroke: 'primary',
            },
          },
          pt: [2],
          pb: [3],
        }}
      >
        <Grid id='grid' columns={['1fr 50px 16px']}>
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
          {(metric.rating === 1 ||
            (metric.name === 'additionality' && metric.value === 2)) && (
            <Check
              sx={{
                position: 'relative',
                ml: [0],
                top: ['8px'],
                width: 28,
                strokeWidth: 1.5,
                color: theme.tags[tag],
                zIndex: -1,
              }}
            />
          )}
          {!(
            metric.rating === 1 ||
            (metric.name === 'additionality' && metric.value === 2)
          ) && <Box />}
          {hasDetails && (
            <Box id='container' sx={{ mt: ['10px'], ml: ['-5px'] }}>
              <Expander
                id={'expander'}
                toggle={toggle}
                value={expanded}
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
          {format(metric.name, metric.value, true)}
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
            <Squares
              color={theme.tags[tag]}
              data={metric.value}
              height='10px'
            ></Squares>
          )}
          {metric.name == 'specificity' && (
            <Squares
              color={theme.tags[tag]}
              data={metric.value}
              height='10px'
            ></Squares>
          )}
          {metric.name == 'rating' && (
            <Rating
              sx={{ color: theme.tags[tag] }}
              value={metric.value}
            ></Rating>
          )}
        </Box>
      </Box>
      <AnimateHeight
        duration={duration}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box
            sx={{ pb: [1] }}
            onClick={(e) => {
              e.stopPropagation()
              toggle(e)
            }}
          >
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
                      textAlign: ['left'],
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
        {!expanded && <span></span>}
      </AnimateHeight>
      <Divider sx={{ mr: [0, 0, 2], mt: [0], mb: [0] }} />
    </Box>
  )
}

export default MetricMobile
