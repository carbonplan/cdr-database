import { memo, useEffect, useRef } from 'react'
import { Box } from 'theme-ui'
import { select } from 'd3-selection'
import { brushX } from 'd3-brush'
import { useChart } from '@carbonplan/charts'

function update(event, x, setBounds, label) {
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

const Brush = ({ label, setBounds }) => {
  const brush = useRef(null)
  const { x } = useChart()

  useEffect(() => {
    if (brush.current != null) {
      select(brush.current).call(
        brushX()
          .extent([
            [0, 0],
            [100, 100],
          ])
          .on('start brush', (e) => update(e, x, setBounds, label))
      )
    }
  }, [])

  return <g ref={brush} />
}

export default memo(Brush)
