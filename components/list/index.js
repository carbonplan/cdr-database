import { memo } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import Report from './report'
import Top from './top'

const List = ({
  filters,
  setFilters,
  filtered,
  data,
  setHighlighted,
  tooltips,
  setTooltips,
}) => {
  return (
    <Box>
      <Top
        data={data}
        filtered={filtered}
        tooltips={tooltips}
        setTooltips={setTooltips}
      />
      <Divider sx={{ ml: [4] }} />
      <Grid
        columns={[1, 1, 2]}
        sx={{ display: ['none', 'none', 'grid'], mt: ['12px'], ml: [0] }}
        gap={['0px']}
      >
        <Box sx={{ pr: ['24px'] }}>
          {data
            .filter((d) => filtered[d.id])
            .filter((d, i) => i % 2 == 0)
            .map((d) => (
              <Report setHighlighted={setHighlighted} key={d.id} data={d} />
            ))}
        </Box>
        <Box sx={{ pl: ['24px'], pr: [0] }}>
          {data
            .filter((d) => filtered[d.id])
            .filter((d, i) => i % 2 == 1)
            .map((d) => (
              <Report setHighlighted={setHighlighted} key={d.id} data={d} />
            ))}
        </Box>
      </Grid>
    </Box>
  )
}

export default memo(List)
