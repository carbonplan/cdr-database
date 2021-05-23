import { useRef, useState, useEffect, useCallback } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { brushX } from 'd3-brush'
import { format } from 'd3-format'
import { FadeIn } from '@carbonplan/components'
import { Chart } from '@carbonplan/charts'
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
  const { theme } = useThemeUI()
  const [width, setWidth] = useState(null)
  const brush = useRef(null)

  const chart = useCallback((chartNode) => {
    if (chartNode != null) {
      setWidth(chartNode.clientWidth)
    }
  })

  const getWidth = () => {
    if (chart.clientWidth) return chart.clientWidth
  }

  useEffect(() => {
    if (width && brush.current != null) {
      const aspect = width / 100
      select(brush.current).call(
        brushX()
          .extent([
            [0, 0],
            [width, 90],
          ])
          .on('start brush', (e) => update(e, aspect))
      )
    }
  }, [width])

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  function updateBounds(key) {
    return (value) =>
      setBounds((bounds) => {
        return { ...bounds, key: value }
      })
  }

  function update(event, aspect) {
    if (event.selection[0] == event.selection[1]) {
      setBounds((bounds) => {
        return { ...bounds, [label]: [] }
      })
    } else {
      setBounds((bounds) => {
        return {
          ...bounds,
          [label]: [
            x.invert(event.selection[0] / aspect),
            x.invert(event.selection[1] / aspect),
          ],
        }
      })
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'block',
        '.selection': { stroke: 'none' },
      }}
    >
      {filtered.init && (
        <FadeIn delay={0} duration={200}>
          <Box
            as='svg'
            ref={chart}
            width='100%'
            height='100px'
            preserveAspectRatio='none'
          >
            <Points
              x={x}
              y={y}
              highlighted={highlighted}
              filtered={filtered}
              data={data}
            />
            <g ref={brush} />
          </Box>
          <Box
            as='svg'
            width={'100%'}
            height={11}
            sx={{ position: 'relative', top: -3 }}
          >
            {ticks.map((d, i) => {
              return (
                <text
                  key={'tick' + '-' + i}
                  x={x(d) + '%'}
                  y={11}
                  textAnchor={'middle'}
                  fontFamily={theme.fonts.mono}
                  fill={theme.colors.muted}
                  fontSize={theme.fontSizes[1]}
                  style={{ userSelect: 'none' }}
                >
                  {format('~s')(d)}
                </text>
              )
            })}
          </Box>
        </FadeIn>
      )}
      {!filtered.init && <Box sx={{ height: '125px' }}></Box>}
    </Box>
  )
}

export default Axis
