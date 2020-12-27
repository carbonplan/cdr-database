import { useRef, useEffect } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { select } from 'd3-selection'
import { brush, brushX } from 'd3-brush'
import Points from './points'

const Chart = ({x, y, highlighted, filtered, data, label, setBounds}) => {
  const svg = useRef(null)
  const { theme } = useThemeUI()

  useEffect(() => {
    select(svg.current)
      .call(brushX()                     
        .extent([[0,0], [370,100]])
        .on('start brush', update)
      )

    return function cleanup() {
      svg.current.innerHTML = ''
    }
  }, [theme])

  function updateBounds(key) {
    return (value) => setBounds((bounds) => {
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
        return { ...bounds, [label]: [x.invert(event.selection[0]), x.invert(event.selection[1])] }
      })
    }
  }

  return <Box sx={{width: '100%', display: 'block', my: [2], '.selection' : {stroke: 'none'}}}>
    <svg ref={svg} width='370' height='100' style={{position: 'absolute'}}></svg>
    <svg width='370' height='100'>
      <Points x={x} y={y} theme={theme} highlighted={highlighted} filtered={filtered} data={data} />
    </svg>
  </Box>
}

export default Chart