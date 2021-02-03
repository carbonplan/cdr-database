import AnimateHeight from 'react-animate-height'
import { useThemeUI, Box, Divider, Grid, Text } from 'theme-ui'
import { Expander, Icons } from '@carbonplan/components'
import Bar from './graphics/bar'
import Squares from './graphics/squares'
import Emissions from './graphics/emissions'
import scales from './graphics/scales'

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

const MetricDesktop = ({
  metric,
  toggle,
  expanded,
  hasDetails,
  hasUnits,
  tag,
  format,
  parse,
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
          pb: [2],
        }}
      >
        <Grid id='grid' gap={['16px']} columns={['55px 95px 1fr 30px 30px']}>
          <Text
            sx={{
              ...sx.value,
              color: theme.tags[tag],
              textAlign: ['left', 'left', 'right'],
            }}
          >
            {parse(metric)}
          </Text>
          <Box>
            {metric.name == 'mechanism' && (
              <Emissions
                tag={tag}
                removal={metric.removal}
                avoided={metric.avoided}
              ></Emissions>
            )}
            {metric.name == 'volume' && (
              <Bar tag={tag} data={metric.value} scale={scales['volume']}></Bar>
            )}
            {metric.name == 'permanence' && (
              <Bar
                tag={tag}
                data={metric.value}
                scale={scales['permanence']}
              ></Bar>
            )}
            {metric.name == 'negativity' && (
              <Bar
                tag={tag}
                data={metric.value}
                scale={scales['negativity']}
              ></Bar>
            )}
            {metric.name == 'cost' && (
              <Bar tag={tag} data={metric.value} scale={scales['cost']}></Bar>
            )}
            {metric.name == 'additionality' && (
              <Squares color={theme.tags[tag]} data={metric.value}></Squares>
            )}
            {metric.name == 'specificity' && (
              <Squares color={theme.tags[tag]} data={metric.value}></Squares>
            )}
          </Box>
          <Text>
            <Text sx={{ ...sx.label, display: 'inline-block' }}>
              {metric.name}
            </Text>
            {hasUnits && (
              <Text sx={{ ...sx.units, display: 'inline-block' }}>
                {metric.units}
              </Text>
            )}
          </Text>
          <Text sx={{ mt: ['5px'] }}>
            {metric.rating === 1 && <Check sx={{ color: theme.tags[tag] }} />}
            {metric.rating === 0 && <Box />}
          </Text>
          {hasDetails && (
            <Box id='container' sx={{ mt: '5px' }}>
              <Expander
                id={'expander'}
                toggle={toggle}
                value={expanded}
              ></Expander>
            </Box>
          )}
        </Grid>
      </Box>
      <AnimateHeight
        duration={duration}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box
            sx={{ pb: [1], cursor: 'text' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              sx={{
                mt: metric.notes || metric.comment ? [2] : [0],
                mb: metric.notes || metric.comment ? [2] : [0],
              }}
            >
              {metric.notes && (
                <Grid gap={['11px']} columns={['171px 1fr 30px']} sx={{}}>
                  <Text
                    sx={{
                      ...sx.comment,
                      color: theme.tags[tag],
                      textAlign: ['right'],
                      mr: ['9px'],
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
                </Grid>
              )}
              <Box
                sx={{
                  mt: metric.notes && metric.comment ? [2] : [0],
                }}
              ></Box>
              {metric.comment && (
                <Grid gap={['11px']} columns={['171px 1fr 30px']} sx={{}}>
                  <Text
                    sx={{
                      ...sx.comment,
                      color: theme.tags[tag],
                      textAlign: ['right'],
                      mr: ['9px'],
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
                </Grid>
              )}
            </Box>
          </Box>
        )}
      </AnimateHeight>
      <Divider sx={{ mr: [2], mt: [0], mb: [0] }} />
    </Box>
  )
}

export default MetricDesktop
