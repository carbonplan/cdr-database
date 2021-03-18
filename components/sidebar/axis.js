import { useRef, useCallback } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { brushX } from 'd3-brush'
import { format } from 'd3-format'
import FadeIn from '../fade-in'
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

  const ref = useCallback(
    (node) => {
      console.log('node appeared')
      if (node !== null) {
        select(node).call(
          brushX()
            .extent([
              [0, 0],
              [370, 90],
            ])
            .on('start brush', update)
        )
      }
    },
    [theme]
  )

  function updateBounds(key) {
    return (value) =>
      setBounds((bounds) => {
        return { ...bounds, key: value }
      })
  }

  function update(event) {
    if (event.selection[0] == event.selection[1]) {
      setBounds((bounds) => {
        return { ...bounds, [label]: [] }
      })
    } else {
      setBounds((bounds) => {
        return {
          ...bounds,
          [label]: [x.invert(event.selection[0]), x.invert(event.selection[1])],
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
        <FadeIn delay={10} duration={150}>
          <svg viewBox='0 0 370 107'>
            <Points
              x={x}
              y={y}
              highlighted={highlighted}
              filtered={filtered}
              data={data}
            />
            <g ref={ref} />
            {ticks.map((d, i) => {
              return (
                <Box
                  as='text'
                  className='axis-label'
                  key={'tick-' + label + '-' + i}
                  x={x(d)}
                  y={106}
                  sx={{
                    fill: 'muted',
                    fontFamily: 'mono',
                    fontSize: [1],
                    textAnchor: 'middle',
                    userSelect: 'none',
                  }}
                >
                  {format('~s')(d)}
                </Box>
              )
            })}
          </svg>
        </FadeIn>
      )}
      {!filtered.init && <Box sx={{ height: '117.938px' }}></Box>}
    </Box>
  )
}

export default Axis
