import { memo } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import Report from './report'
import Top from './top'
import useMedia from 'react-use/lib/useMedia'

const List = ({
  filters,
  setFilters,
  filtered,
  data,
  setHighlighted,
  tooltips,
  setTooltips,
}) => {
  const isWide = useMedia('screen and (min-width: 86em)')

  return (
    <Box>
      <Top
        data={data}
        filtered={filtered}
        tooltips={tooltips}
        setTooltips={setTooltips}
      />
      <Divider sx={{ display: ['none', 'none', 'inherit'], ml: [4] }} />
      {isWide && (
        <Grid
          columns={[2]}
          sx={{ display: ['grid'], mt: ['12px'], ml: [0] }}
          gap={['0px']}
        >
          <Box sx={{ pr: ['24px'] }}>
            {data
              .filter((d) => filtered[d.id])
              .filter((d, i) => i % 2 == 0)
              .map((d) => (
                <Report
                  setHighlighted={setHighlighted}
                  key={d.id}
                  data={d}
                  tooltips={tooltips}
                />
              ))}
          </Box>
          <Box sx={{ pl: ['24px'], pr: [0] }}>
            {data
              .filter((d) => filtered[d.id])
              .filter((d, i) => i % 2 == 1)
              .map((d) => (
                <Report
                  setHighlighted={setHighlighted}
                  key={d.id}
                  data={d}
                  tooltips={tooltips}
                />
              ))}
          </Box>
        </Grid>
      )}
      {!isWide && (
        <Box sx={{ mt: [0, 0, '28px'] }}>
          {data
            .filter((d) => filtered[d.id])
            .map((d) => (
              <Report
                setHighlighted={setHighlighted}
                key={d.id}
                data={d}
                tooltips={tooltips}
              />
            ))}
        </Box>
      )}
    </Box>
  )
}

export default memo(List)
