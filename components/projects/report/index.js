import { memo, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import {
  useColorMode,
  useThemeUI,
  Divider,
  Box,
  Flex,
  Grid,
  Link,
} from 'theme-ui'
import { Expander, Tag } from '@carbonplan/components'
import Metric from './metric'
import Share from './share'

const showMetrics = [
  'mechanism',
  'volume',
  'negativity',
  'permanence',
  'price',
  'additionality',
  'specificity',
]

const Report = ({ data, setHighlighted, tooltips, embed }) => {
  const [expanded, setExpanded] = useState(embed ? true : false)
  const { theme } = useThemeUI()
  const [colorMode] = useColorMode()

  let {
    id,
    applicant,
    name,
    description,
    source,
    documentation,
    tags,
    metrics,
    location,
    rating,
    notes,
  } = data

  metrics = showMetrics.map((metric) => {
    return metrics.filter((m) => m.name == metric)[0]
  })

  metrics = [
    {
      name: 'rating',
      value: rating,
      units: '',
      notes: '',
      comment: '',
    },
  ].concat(metrics)

  const ml = embed ? [0, 0, 0] : [0, 0, '24px', '36px']
  const pl = embed ? [0, 0, 0] : [0, 0, '24px', '36px']

  const arrow = {
    ml: [1],
    fontSize: [4],
    position: 'relative',
    top: '4px',
    display: 'inline-block',
    textDecoration: 'none',
    lineHeight: 0,
    zIndex: '-1',
    '&:active': {
      color: 'primary',
    },
    '&:hover': {
      color: 'primary',
    },
  }

  return (
    <Box
      onClick={(e) => {
        if (!embed) setExpanded(!expanded)
      }}
      onMouseEnter={() => {
        if (setHighlighted) setHighlighted(id)
      }}
      onMouseLeave={() => {
        if (setHighlighted) setHighlighted(null)
      }}
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderBottomWidth: embed
          ? ['0px', '0px', '0px']
          : ['1px', '1px', '0px'],
        borderLeftWidth: embed ? [0, 0, 0] : ['0px', '0px', '1px'],
        borderRadius: '0px',
        cursor: embed ? 'default' : 'pointer',
        pl: embed ? [0, 0, 0] : [0, 0, 0],
        pr: [0],
        pt: embed ? [0, 0, 0] : ['0px', '0px', '12px'],
        my: [embed ? 0 : 3],
        mb: embed ? [0, 0, 0] : [3, 3, '24px'],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: ['muted', 'muted', 'secondary'],
        },
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #container > #box > #flex > #text > #expander': {
            stroke: 'primary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '#container > #box > #flex > #text > #expander': {
            stroke: expanded ? 'primary' : 'secondary',
          },
        },
      }}
    >
      <Flex
        id='container'
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          mt: ['-6px'],
          ml: ml,
        }}
      >
        <Box id='box' sx={{ mt: ['6px'] }}>
          <Flex
            id='flex'
            sx={{
              width: ['fit-content'],
              flexWrap: 'wrap',
              ml: [-2],
            }}
          >
            <Box
              id='text'
              sx={{
                display: 'inline-block',
                fontSize: [4, 4, 4, 5],
                lineHeight: 'heading',
                ml: [2],
              }}
            >
              {!embed && (
                <Expander
                  sx={{
                    display: ['initial', 'none', 'none'],
                    ml: ['-5px'],
                    mr: [2],
                    mt: ['2px'],
                  }}
                  id='expander'
                  value={expanded}
                ></Expander>
              )}
              {applicant}
              {!embed && (
                <Expander
                  sx={{
                    display: ['none', 'initial', 'initial'],
                    ml: [2],
                    mr: [2],
                    mt: ['2px'],
                  }}
                  id='expander'
                  value={expanded}
                ></Expander>
              )}
            </Box>
          </Flex>
        </Box>
        <Box
          sx={{
            width: embed ? ['100%'] : ['100%', 'fit-content', 'fit-content'],
            pt: [0],
            mt: ['5px', '5px', '5px', '11px'],
          }}
        >
          {tags.map((tag, i) => (
            <Tag
              key={id + '-tag-' + i}
              label={tag}
              value={true}
              sx={{
                cursor: 'inherit',
                mr: i == 0 ? [2] : [0],
                color: theme.tags[tag],
              }}
            >
              {tag}
            </Tag>
          ))}
        </Box>
      </Flex>
      <Box sx={{ pt: ['8px'], ml: ml, pb: [2], fontSize: [2, 2, 2, 3] }}>
        {description}
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          fontSize: [1, 1, 1, 2],
          ml: ml,
          pt: ['2px'],
          pb: [1],
          color: 'secondary',
        }}
      >
        {id.includes('STRP') & (parseInt(id.split('STRP')[1]) <= 24)
          ? 'Stripe 2020'
          : ''}
        {id.includes('STRP') &
        (parseInt(id.split('STRP')[1]) > 24 &&
          parseInt(id.split('STRP')[1]) <= 50)
          ? 'Stripe Spring 2021'
          : ''}
        {id.includes('STRP') &
        (parseInt(id.split('STRP')[1]) > 50 &&
          parseInt(id.split('STRP')[1]) <= 61)
          ? 'Stripe Fall 2021'
          : ''}
        {id.includes('MSFT') ? 'Microsoft 2021' : ''}
        <Box as='span' sx={{ mx: [2] }}>
          /
        </Box>
        {location.name}
      </Box>
      <AnimateHeight
        duration={100}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box sx={{ mt: [0] }}>
            <Box sx={{ mt: [3] }}>
              <Divider sx={{ ml: ml, mr: [0], mt: [0], mb: [0] }} />
              {metrics.map((metric) => (
                <Metric
                  key={metric.name}
                  tag={tags[0]}
                  metric={metric}
                  tooltips={tooltips}
                  embed={embed}
                ></Metric>
              ))}
            </Box>
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                pl: pl,
                fontSize: [1, 1, 1, 2],
                pt: [3],
                cursor: 'default',
              }}
            >
              {!(notes === '') && (
                <Box
                  sx={{
                    color: 'secondary',
                    mt: [2],
                    mb: [3],
                  }}
                >
                  Note: {notes}
                </Box>
              )}
              <Box sx={{ display: 'inline-block', color: 'secondary' }}>
                <Box as='span' sx={{ mr: [2] }}>
                  <Link
                    sx={{
                      textDecoration: 'none',
                      color: 'secondary',
                      '&:hover': {
                        color: 'primary',
                      },
                    }}
                    href={source.url}
                  >
                    Proposal
                    <Box sx={arrow}>↗</Box>
                  </Link>
                </Box>
                {!(documentation.name === '') && (
                  <Box as='span'>
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        textDecoration: 'none',
                        color: 'secondary',
                        '&:hover': {
                          color: 'primary',
                        },
                      }}
                      href={documentation.url}
                    >
                      {documentation.name}
                      <Box sx={arrow}>↗</Box>
                    </Link>
                  </Box>
                )}
              </Box>
              <Box
                sx={{ color: 'secondary', textAlign: 'right', float: 'right' }}
              >
                <Share
                  value={`https://carbonplan.org/research/cdr-database/project?id=${id}`}
                  label='Share'
                >
                  <Box sx={{ ...arrow, fontSize: ['22px'], top: '2px' }}>↑</Box>
                </Share>
                <Box sx={{ display: ['none', 'initial', 'initial'] }}>
                  <Share
                    value={` <iframe src='https://carbonplan.org/research/cdr-database/embed?id=${id}&theme=${colorMode}' loading='lazy' style='width: 458px; height: 618px; border: 0px none;'/>`}
                    label='Embed'
                  >
                    <Box
                      sx={{
                        ml: [1],
                        position: 'relative',
                        top: '1px',
                        display: 'inline-block',
                        width: '28px',
                        height: '12px',
                        zIndex: -1,
                      }}
                    >
                      <svg id='icon' viewBox='0 0 28 12'>
                        <line
                          x1='2'
                          x2='9'
                          y1='6'
                          y2='9'
                          strokeWidth='1.75'
                          strokeLinecap='round'
                        />
                        <line
                          x1='2'
                          x2='9'
                          y1='6'
                          y2='3'
                          strokeWidth='1.75'
                          strokeLinecap='round'
                        />
                        <line
                          x1='19'
                          x2='26'
                          y1='9'
                          y2='6'
                          strokeWidth='1.75'
                          strokeLinecap='round'
                        />
                        <line
                          x1='19'
                          x2='26'
                          y1='3'
                          y2='6'
                          strokeWidth='1.75'
                          strokeLinecap='round'
                        />
                        <line
                          x1='12'
                          x2='15.5'
                          y1='13'
                          y2='0'
                          strokeWidth='1.75'
                          strokeLinecap='round'
                        />
                      </svg>
                    </Box>
                  </Share>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </AnimateHeight>
      <Box
        onClick={(e) => {
          if (expanded) e.stopPropagation()
        }}
        sx={{ height: ['16px'], cursor: 'default' }}
      />
    </Box>
  )
}

export default memo(Report)
