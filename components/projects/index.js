import { memo } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import { useMedia } from 'react-use'
import Report from './report'
import Top from './top'
import FadeIn from '../fade-in'

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
      {filtered.init && (
        <FadeIn delay={10} duration={300}>
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
          {filtered.count == 0 && filtered.init == true && (
            <Box
              sx={{
                pl: [0, 0, 0],
                pt: [3, 2, '150px'],
                maxWidth: '350px',
                margin: [0, 0, 'auto'],
              }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  color: 'text',
                  fontSize: [1],
                  fontFamily: 'mono',
                  color: 'secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 'mono',
                }}
              >
                No results found
              </Box>
              <Box
                sx={{
                  mt: [2],
                }}
              >
                Please try changing the filter settings in the panel on the left
                and try again.
              </Box>
            </Box>
          )}
        </FadeIn>
      )}
    </Box>
  )
}

export default memo(List)
