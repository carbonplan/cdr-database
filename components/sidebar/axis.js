import { useRef, useState, useEffect, useCallback } from 'react'
import { Box } from 'theme-ui'
import { format } from 'd3-format'
import { FadeIn } from '@carbonplan/components'
import { Chart, Plot, Ticks, TickLabels } from '@carbonplan/charts'
import Brush from './brush'
import Points from './points'

const Axis = ({
  x,
  y,
  highlighted,
  filtered,
  data,
  label,
  setBounds,
  ticks,
}) => {
  const [width, setWidth] = useState(null)

  const chart = useCallback((chartNode) => {
    if (chartNode != null) {
      setWidth(chartNode.clientWidth)
    }
  })

  const getWidth = () => {
    if (chart.clientWidth) return chart.clientWidth
  }

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return (
    <FadeIn delay={0} duration={200}>
      <Box
        ref={chart}
        sx={{
          width: '100%',
          height: ['140px', '140px', '140px', '180px'],
          '.selection': { stroke: 'none' },
          mb: [3],
        }}
      >
        <Chart
          logx
          x={x}
          y={y}
          padding={{ left: 0, right: 0, top: 5, bottom: 30 }}
        >
          <Ticks bottom values={ticks} />
          <TickLabels bottom values={ticks} format={format('~s')} />
          <Plot>
            <Points highlighted={highlighted} filtered={filtered} data={data} />
            <Brush label={label} setBounds={setBounds} />
          </Plot>
        </Chart>
      </Box>
    </FadeIn>
  )
}

export default Axis
