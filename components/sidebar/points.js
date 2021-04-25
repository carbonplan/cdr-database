import { Box } from 'theme-ui'
import { memo } from 'react'
import { mix } from '@theme-ui/color'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange',
}

const Points = ({ data, filtered, highlighted, x, y }) => {
  return data
    .sort((a, b) => {
      if (filtered[a.id] && !filtered[b.id]) return 1
      if (!filtered[a.id] && filtered[b.id]) return -1
      else return 0
    })
    .map((d) => {
      return (
        <Box
          as='circle'
          key={d.id}
          cx={`${x(d.value)}%`}
          cy={y(d.tag)}
          r={d.id == highlighted ? 8 : 4}
          sx={{
            transition: 'r 0.15s',
            fill: filtered[d.id]
              ? colors[d.tag]
              : mix(colors[d.tag], 'background', 0.15),
          }}
        />
      )
    })
}

export default memo(Points)
