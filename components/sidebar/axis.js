import { useRef, useEffect } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { brushX } from 'd3-brush'
import { format } from 'd3-format'
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
  const ref = useRef(null)
  const { theme } = useThemeUI()

  useEffect(() => {
    select(ref.current).call(
      brushX()
        .extent([
          [0, 0],
          [370, 90],
        ])
        .on('start brush', update)
    )

    return function cleanup() {
      ref.current.innerHTML = ''
    }
  }, [theme])

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
        '.axis-label': {
          fill: 'muted',
          fontFamily: 'mono',
          fontSize: [1],
          textAnchor: 'middle',
          userSelect: 'none',
        },
      }}
    >
      <svg viewBox='0 0 370 107'>
        <Points
          x={x}
          y={y}
          theme={theme}
          highlighted={highlighted}
          filtered={filtered}
          data={data}
        />
        <g ref={ref} />
        {ticks.map((d, i) => {
          return (
            <text
              className='axis-label'
              key={'tick-' + label + '-' + i}
              x={x(d)}
              y={106}
            >
              {format('~s')(d)}
            </text>
          )
        })}
      </svg>
    </Box>
  )
}

export default Axis
