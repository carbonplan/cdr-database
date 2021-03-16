import { memo } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import Report from './report'
import Top from './top'
import { useMedia } from 'react-use'

const List = ({
  filters,
  setFilters,
  filtered,
  data,
  setHighlighted,
  tooltips,
  setTooltips,
  mobileFilterExpanded,
  setMobileFilterExpanded,
}) => {
  const isWide = useMedia('screen and (min-width: 86em)')

  return (
    <Box>
      <Top
        data={data}
        filtered={filtered}
        tooltips={tooltips}
        setTooltips={setTooltips}
        mobileFilterExpanded={mobileFilterExpanded}
        setMobileFilterExpanded={setMobileFilterExpanded}
      />
      <Divider sx={{ display: ['none', 'none', 'inherit'], ml: [4] }} />
      {isWide && filtered.count > 0 && (
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
      {!isWide && filtered.count > 0 && (
        <Box sx={{ mb: [0], mt: [0, 0, '28px'] }}>
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
      {filtered.count == 0 && (
        <Box
          sx={{
            pl: [0, 0, '25px'],
            pt: [1, 2, '29px'],
            fontSize: [4],
            letterSpacing: 'body',
            maxWidth: '350px',
            color: 'secondary',
          }}
        >
          <Box sx={{ display: 'inline-block', color: 'text' }}>
            No results found.
          </Box>
          <br />
          Please try changing the filter settings in the panel on the left.
        </Box>
      )}
    </Box>
  )
}

export default memo(List)
