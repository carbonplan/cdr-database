import { memo, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useThemeUI, Divider, Box, Text, Grid, Link } from 'theme-ui'
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

const Report = ({ data, setHighlighted }) => {
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
        borderLeftWidth: '1px',
        borderRadius: '0px',
        cursor: 'pointer',
        pl: [3],
        pr: [0],
        pt: ['12px'],
        pb: [3],
        my: [3],
        mb: [4],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: 'secondary',
        },
        '&:hover > #container > #expander': {
          fill: 'primary',
          stroke: 'primary',
        },
      }}
    >
      <Box id='container'>
        <Text
          sx={{ display: 'inline-block', fontSize: [4], lineHeight: 'heading' }}
        >
          {applicant}
        </Text>
        <Expander sx={{ ml: [2] }} id='expander' value={expanded}></Expander>
        <Box sx={{ float: 'right', textAlign: 'right' }}>
          {tags.map((tag, i) => (
            <Tag
              label={tag}
              value={true}
              sx={{
                cursor: 'inherit',
                mr: i == 0 ? [2] : [0],
                color: theme.tags[tag],
              }}
            />
          ))}
        </Box>
      </Box>
      <Text sx={{ pt: [2], pb: [2], fontSize: [2] }}>{description}</Text>
      <Text sx={{ fontSize: [1], pt: [0], pb: [1], color: 'secondary' }}>
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
