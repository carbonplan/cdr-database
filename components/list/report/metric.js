import { useState } from 'react'
import { Box } from 'theme-ui'
import MetricMobile from './metric-mobile'
import MetricDesktop from './metric-desktop'

const Metric = ({ metric, tag, tooltips, setTooltips }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  const length =
    (metric.comment ? metric.comment.length : 0) +
    (metric.notes ? metric.notes.length : 0)
  const duration = Math.min(Math.max(length / 2, 100), 200) * 0.75

  const hasUnits = metric.units != ''
  const hasDetails = metric.notes != '' || metric.comment != ''

  const format = (key, value) => {
    if (value == 'N/A') return 'N/A'
    if (key == 'additionality') return ''
    if (key == 'specificity') return ''
    if (key == 'permanence' && value == 1000) return '1000+'
    else if (key == 'cost') return '$' + parseFloat(value).toFixed(0)
    else if (key == 'negativity') return parseFloat(value).toFixed(2)
    else if (key == 'volume') {
      if (value < 1000) return value
      else if (value >= 1000 && value < 1000000)
        return Math.round(value / 1000) + 'k'
      else if (value >= 1000000) return Math.round(value / 1000000) + 'M'
    } else return value
  }

  const parse = (metric) => {
    if (metric.name != 'mechanism') return format(metric.name, metric.value)
    if ((metric.name == 'mechanism') & (metric.removal & !metric.avoided))
      return 'CDR'
    if ((metric.name == 'mechanism') & (!metric.removal & metric.avoided))
      return 'AVD'
    if ((metric.name == 'mechanism') & (metric.removal & metric.avoided))
      return 'BOTH'
  }

  return (
    <Box>
      <Box sx={{ display: ['inherit', 'inherit', 'none'] }}>
        <MetricMobile
          metric={metric}
          hasUnits={hasUnits}
          hasDetails={hasDetails}
          toggle={toggle}
          expanded={expanded}
          tag={tag}
          format={format}
          duration={duration}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Box>
      <Box sx={{ display: ['none', 'none', 'inherit'] }}>
        <MetricDesktop
          metric={metric}
          hasUnits={hasUnits}
          hasDetails={hasDetails}
          toggle={toggle}
          expanded={expanded}
          tag={tag}
          parse={parse}
          format={format}
          duration={duration}
          tooltips={tooltips}
          setTooltips={setTooltips}
        />
      </Box>
    </Box>
  )
}

export default Metric
