import { memo, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useThemeUI, Divider, Box, Text, Grid } from 'theme-ui'
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

const Report = ({
  id,
  applicant,
  name,
  description,
  tags,
  metrics,
  setHighlighted,
}) => {
  const [expanded, setExpanded] = useState(false)
  const { theme } = useThemeUI()

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
        pr: [3],
        pt: ['12px'],
        pb: [3],
        my: [3],
        mb: [4],
        transition: 'border-color 0.15s',
        '&:hover': {
          borderColor: 'secondary',
        },
        '&:hover > #grid > #container > #expander': {
          fill: 'primary',
          stroke: 'primary',
        },
      }}
    >
      <Grid gap={0} columns={['1fr 250px']}>
        <Text sx={{ fontSize: [4], lineHeight: 'heading' }}>{name}</Text>
        <Box sx={{ textAlign: 'right' }}>
          {tags.map((tag) => (
            <Tag
              label={tag}
              value={true}
              sx={{ cursor: 'inherit', color: theme.tags[tag] }}
            />
          ))}
        </Box>
      </Grid>
      <Grid id='grid' gap={['8px', '8px', '16px']} columns={[1, 1, '1fr 32px']}>
        <Text sx={{ pt: [2], pb: [2] }}>{description}</Text>
        <Box id='container' sx={{ mt: ['8px'], ml: ['-5px', '-5px', '2px'] }}>
          <Expander id='expander' value={expanded}></Expander>
        </Box>
      </Grid>
      <AnimateHeight
        duration={100}
        height={expanded ? 'auto' : 0}
        easing={'linear'}
      >
        <Box sx={{ mt: [0] }}>
          {expanded && (
            <Box sx={{ mt: [3] }}>
              <Divider sx={{ mr: [2], mt: [0], mb: [0] }} />
              {metrics.map((metric) => (
                <Metric
                  key={metric.name}
                  tag={tags[0]}
                  metric={metric}
                ></Metric>
              ))}
            </Box>
          )}
        </Box>
      </AnimateHeight>
    </Box>
  )
}

export default memo(Report)
