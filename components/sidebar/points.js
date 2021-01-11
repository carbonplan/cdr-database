import { memo } from 'react'
import { mix } from 'polished'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange',
}

const Points = ({ theme, data, filtered, highlighted, x, y }) => {
  return data
    .sort((a, b) => {
      if (filtered[a.id] && !filtered[b.id]) return 1
      if (!filtered[a.id] && filtered[b.id]) return -1
      else return 0
    })
    .map((d) => {
      return (
        <circle
          key={d.id}
          cx={x(d.value)}
          cy={y(d.tag)}
          r={d.id == highlighted ? 8 : 4}
          style={{ transition: 'r 0.15s' }}
          fill={
            filtered[d.id]
              ? theme.colors[colors[d.tag]]
              : mix(
                  0.15,
                  String(theme.colors[colors[d.tag]]),
                  String(theme.colors.background)
                )
          }
        />
      )
    })
}

export default memo(Points)
