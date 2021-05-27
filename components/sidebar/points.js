import { Box } from 'theme-ui'
import { memo } from 'react'
import { mix } from '@theme-ui/color'
import { useChart, Circle } from '@carbonplan/charts'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange',
}

const tagsToIndex = {
  forests: 5,
  soil: 4,
  biomass: 3,
  ocean: 2,
  mineralization: 1,
  dac: 0,
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
        <Circle
          key={d.id}
          x={d.value}
          y={tagsToIndex[d.tag]}
          size={d.id == highlighted ? 16 : 8}
          sx={{
            transition: 'stroke-width 0.15s',
            stroke: filtered[d.id]
              ? colors[d.tag]
              : mix(colors[d.tag], 'background', 0.15),
          }}
        />
      )
    })
}

export default memo(Points)
