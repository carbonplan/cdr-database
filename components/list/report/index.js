import { memo, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useThemeUI, Divider, Box, Flex, Text, Grid, Link } from 'theme-ui'
import { Expander, Tag } from '@carbonplan/components'
import Metric from './metric'

const showMetrics = [
  'mechanism',
  'volume',
  'negativity',
  'permanence',
  'cost',
  'additionality',
  'specificity',
]

const Report = ({ data, setHighlighted, tooltips, setTooltips }) => {
  const [expanded, setExpanded] = useState(false)
  const { theme } = useThemeUI()

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
  } = data

  metrics = showMetrics.map((metric) => {
    return metrics.filter((m) => m.name == metric)[0]
  })

  return (
    <Box
      onClick={() => {
        setExpanded(!expanded)
      }}
      onMouseEnter={() => {
        setHighlighted(id)
      }}
      onMouseLeave={() => {
        setHighlighted(null)
      }}
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderBottomWidth: ['1px', '1px', '0px'],
        borderLeftWidth: ['0px', '0px', '1px'],
        borderRadius: '0px',
        cursor: 'pointer',
        pl: [0, 0, '24px'],
        pr: [0],
        pt: ['0px', '0px', '12px'],
        pb: [3],
        my: [3],
        mb: [3, 3, 4],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: ['muted', 'muted', 'secondary'],
        },
        '&:hover > #container > #box > #flex > #expander': {
          fill: 'primary',
          stroke: 'primary',
        },
      }}
    >
      <Flex
        id='container'
        sx={{ justifyContent: 'space-between', flexWrap: 'wrap', mt: ['-6px'] }}
      >
        <Box id='box' sx={{ mt: ['6px'] }}>
          <Flex
            id='flex'
            sx={{
              width: ['fit-content'],
              flexWrap: 'wrap',
              ml: [-2],
              mt: [-2],
            }}
          >
            <Text
              sx={{
                display: 'inline-block',
                fontSize: [4],
                lineHeight: 'heading',
                ml: [2],
                mt: [2],
              }}
            >
              {applicant}
            </Text>
            <Expander
              sx={{ ml: [2], mr: [2], mt: ['10px'] }}
              id='expander'
              value={expanded}
            ></Expander>
          </Flex>
        </Box>
        <Box
          sx={{
            width: ['100%', 'fit-content', 'fit-content'],
            pt: [0],
            mt: ['6px'],
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
      <Text sx={{ pt: ['2px'], pb: [2], fontSize: [2] }}>{description}</Text>
      <Text sx={{ fontSize: [1], pt: ['2px'], pb: [1], color: 'secondary' }}>
        {id.includes('STRP') && 'Stripe 2020'}
        {id.includes('MSFT') && 'Microsoft 2021'}
      </Text>
      <AnimateHeight
        duration={100}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        {expanded && (
          <Box sx={{ mt: [0] }}>
            <Box sx={{ mt: [3] }}>
              <Divider sx={{ mr: [0], mt: [0], mb: [0] }} />
              {metrics.map((metric) => (
                <Metric
                  key={metric.name}
                  tag={tags[0]}
                  metric={metric}
                  tooltips={tooltips}
                  setTooltips={setTooltips}
                ></Metric>
              ))}
            </Box>
            <Box sx={{ fontSize: [1], mt: [3] }}>
              <Box sx={{ display: 'inline-block', color: 'secondary' }}>
                <Text as='span' sx={{ mr: [2] }}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      textDecoration: 'none',
                      color: 'secondary',
                      '&:hover': {
                        color: 'primary',
                      },
                      '&:hover > #arrow': {
                        color: 'primary',
                      },
                    }}
                    href={source.url}
                  >
                    Proposal
                    <Text
                      id='arrow'
                      sx={{
                        ml: [1],
                        color: 'secondary',
                        fontSize: [4],
                        position: 'relative',
                        top: '4px',
                        display: 'inline-block',
                        textDecoration: 'none',
                        lineHeight: 0,
                        '&:active': {
                          color: 'primary',
                        },
                        '&:hover': {
                          color: 'primary',
                          borderColor: 'primary',
                        },
                      }}
                    >
                      ↗
                    </Text>
                  </Link>
                </Text>
                {!(documentation.name === '') && (
                  <Text as='span'>
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        textDecoration: 'none',
                        color: 'secondary',
                        '&:hover': {
                          color: 'primary',
                        },
                        '&:hover > #arrow': {
                          color: 'primary',
                        },
                      }}
                      href={documentation.url}
                    >
                      {documentation.name}
                      <Text
                        id='arrow'
                        sx={{
                          ml: [1],
                          fontSize: [4],
                          position: 'relative',
                          top: '4px',
                          display: 'inline-block',
                          textDecoration: 'none',
                          lineHeight: 0,
                          '&:active': {
                            color: 'primary',
                          },
                          '&:hover': {
                            color: 'primary',
                            borderColor: 'primary',
                          },
                        }}
                      >
                        ↗
                      </Text>
                    </Link>
                  </Text>
                )}
              </Box>
              <Box
                sx={{ color: 'secondary', textAlign: 'right', float: 'right' }}
              >
                <Text>{location.name}</Text>
              </Box>
            </Box>
          </Box>
        )}
      </AnimateHeight>
    </Box>
  )
}

export default memo(Report)
