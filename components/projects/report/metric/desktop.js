import { useState, useEffect } from 'react'
import AnimateHeight from 'react-animate-height'
import { useThemeUI, Box, Divider, Grid, Text } from 'theme-ui'
import { Expander } from '@carbonplan/components'
import { Check } from '@carbonplan/icons'
import Bar from '../graphics/bar'
import Squares from '../graphics/squares'
import Rating from '../graphics/rating'
import Mechanism from '../graphics/mechanism'
import TooltipToggle from '../../../tooltip/toggle'
import TooltipDescription from '../../../tooltip/description'
import scales from '../graphics/scales'

const sx = {
  comment: {
    fontFamily: 'faux',
    fontSize: [1, 1, 1, 2],
    color: 'secondary',
    letterSpacing: 'faux',
    lineHeight: 'small',
    mt: [0],
    mb: [2],
    maxWidth: '450px',
    wordBreak: 'break-word',
  },
  value: {
    fontFamily: 'mono',
    fontSize: [3],
    textAlign: 'right',
    mt: ['6px'],
  },
  label: {
    fontFamily: 'mono',
    fontSize: [2, 2, 2, 3],
    mt: ['8px', '8px', '8px', '6px'],
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
  tooltips,
  embed,
}) => {
  const { theme } = useThemeUI()
  const [tooltip, setTooltip] = useState(false)

  return (
    <Box>
      <Box
        onClick={hasDetails ? toggle : (e) => e.stopPropagation()}
        sx={{
          cursor: hasDetails ? 'pointer' : 'initial',
          pointerEvents: 'all',
          '&:hover > #grid > #container > #expander': {
            fill: 'primary',
            stroke: 'primary',
          },
          pt: [1],
          pb: ['6px'],
          pl: embed ? [2, 2, 2] : [0, 0, '24px', '38px'],
        }}
      >
        <Grid id='grid' gap={['16px']} columns={['55px 95px 1fr 15px 30px']}>
          <Text
            sx={{
              ...sx.value,
              color: theme.tags[tag],
              textAlign: ['right'],
            }}
          >
            {format(metric.name, metric.value)}
          </Text>
          <Box>
            {metric.name == 'mechanism' && (
              <Mechanism tag={tag} value={metric.value}></Mechanism>
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
            {metric.name == 'price' && (
              <Bar tag={tag} data={metric.value} scale={scales['price']}></Bar>
            )}
            {metric.name == 'additionality' && (
              <Box sx={{ mt: '13px' }}>
                <Squares color={theme.tags[tag]} data={metric.value}></Squares>
              </Box>
            )}
            {metric.name == 'specificity' && (
              <Box sx={{ mt: '13px' }}>
                <Squares color={theme.tags[tag]} data={metric.value}></Squares>
              </Box>
            )}
            {metric.name == 'rating' && (
              <Box sx={{ width: 'calc(100% + 40px)', ml: '-40px', mb: '0px' }}>
                <Rating
                  sx={{ color: theme.tags[tag] }}
                  value={metric.value}
                ></Rating>
              </Box>
            )}
          </Box>
          <Text>
            <Text
              sx={{
                ...sx.label,
                display: 'inline-block',
                mr: tooltips ? [3] : [0],
              }}
            >
              {metric.name}
            </Text>
            {tooltips && (
              <Box
                sx={{
                  position: 'relative',
                  top: ['3px'],
                  display: 'inline-block',
                }}
              >
                <TooltipToggle
                  tooltips={tooltips}
                  value={tooltip}
                  setValue={setTooltip}
                />
              </Box>
            )}
          </Text>
          <Text sx={{ mt: ['3px'] }}>
            {(metric.rating === 1 ||
              (metric.name === 'additionality' && metric.value === 2)) && (
              <Check
                sx={{
                  width: '16px',
                  ml: '2px',
                  mt: '4px',
                  strokeWidth: 1.5,
                  color: theme.tags[tag],
                }}
              />
            )}
            {metric.rating === 0 && <Box />}
          </Text>
          {hasDetails && (
            <Box id='container' sx={{ ml: ['8px'], mt: '7px' }}>
              <Expander
                id={'expander'}
                toggle={toggle}
                value={expanded}
              ></Expander>
            </Box>
          )}
        </Grid>
      </Box>
      <Box onClick={(e) => e.stopPropagation()}>
        <TooltipDescription
          label={metric.name.toLowerCase()}
          value={tooltip}
          tooltips={tooltips}
          ml={'0px'}
          sx={{
            cursor: 'text',
            pl: embed ? ['190px'] : ['182px', '182px', '206px', '220px'],
            pr: ['30px'],
            mt: ['-4px'],
            pb: ['10px'],
          }}
        />
      </Box>
      <AnimateHeight
        duration={duration}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box
            sx={{
              pb: [1],
              cursor: 'text',
              pl: embed ? [2, 2, 2] : [0, 0, '24px', '38px'],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              sx={{
                mt: metric.notes || metric.comment ? [0] : [0],
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
        {!expanded && <span></span>}
      </AnimateHeight>
      <Divider
        sx={{
          ml: embed ? [0, 0, 0] : [0, 0, '24px', '38px'],
          mr: [0],
          mt: [0],
          mb: [0],
        }}
      />
    </Box>
  )
}

export default MetricDesktop
