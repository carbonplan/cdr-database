import { useState } from 'react'
import { Box } from 'theme-ui'
import { format as _format } from 'd3-format'
import { useMeasure } from 'react-use'
import MetricMobile from './mobile'
import MetricDesktop from './desktop'

const Metric = ({ metric, tag, tooltips, embed }) => {
  const [expanded, setExpanded] = useState(false)

  const [ref, { width }] = useMeasure()

  const toggle = (e) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  const length =
    (metric.comment ? metric.comment.length : 0) +
    (metric.notes ? metric.notes.length : 0)
  const duration = Math.min(Math.max(length / 2, 100), 200) * 0.75

  const hasUnits = metric.units != ''
  const hasDetails = metric.notes !== '' || metric.comment !== ''

  const format = (key, value, mobile = false) => {
    if (value == 'N/A') return 'N/A'
    if (key == 'additionality') return ''
    if (key == 'specificity') return ''
    if (key == 'rating') return ''
    if (key == 'permanence' && value == 1000) return '1000+'
    if (mobile) {
      if (key == 'mechanism' && value == 0) return 'REMOVAL'
      if (key == 'mechanism' && value == 1) return 'AVOIDED'
      if (key == 'mechanism' && value == 3) return 'N/A'
    }
    if (!mobile) {
      if (key == 'mechanism' && value == 0) return 'RMV'
      if (key == 'mechanism' && value == 1) return 'AVD'
      if (key == 'mechanism' && value == 3) return 'N/A'
    }
    if (key == 'mechanism' && value == 2) return 'BOTH'
    else if (key == 'price') {
      if (parseFloat(value) < 1000) {
        return '$' + _format('.3~s')(parseFloat(value).toFixed(0))
      } else {
        return '$' + _format('.2~s')(parseFloat(value).toFixed(0))
      }
    } else if (key == 'negativity') return parseFloat(value).toFixed(2)
    else if (key == 'volume') {
      if (value < 1000) return value
      else if (value >= 1000 && value < 1000000)
        return Math.round(value / 1000) + 'k'
      else if (value >= 1000000) return Math.round(value / 1000000) + 'M'
    } else return value
  }

  return (
    <Box ref={ref}>
      {!embed && (
        <Box>
          <Box sx={{ display: ['inherit', 'none', 'none'] }}>
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
            />
          </Box>
          <Box sx={{ display: ['none', 'inherit', 'inherit'] }}>
            <MetricDesktop
              metric={metric}
              hasUnits={hasUnits}
              hasDetails={hasDetails}
              toggle={toggle}
              expanded={expanded}
              tag={tag}
              format={format}
              duration={duration}
              tooltips={tooltips}
            />
          </Box>
        </Box>
      )}
      {embed && width < 400 && (
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
        />
      )}
      {embed && width >= 400 && (
        <MetricDesktop
          metric={metric}
          hasUnits={hasUnits}
          hasDetails={hasDetails}
          toggle={toggle}
          expanded={expanded}
          tag={tag}
          format={format}
          duration={duration}
          tooltips={tooltips}
          embed={true}
        />
      )}
    </Box>
  )
}

export default Metric
