import { memo } from 'react'
import { Box, Grid, Divider } from 'theme-ui'
import { useMedia } from 'react-use'
import { FadeIn } from '@carbonplan/components'
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
  const isWide = useMedia('screen and (min-width: 72em)')

  return (
    <Box>
      <Top
        data={data}
        filtered={filtered}
        tooltips={tooltips}
        setTooltips={setTooltips}
      />
      {filtered.init && (
        <FadeIn delay={10} duration={150}>
          {isWide && filtered.count > 0 && (
            <Grid
              columns={[2]}
              sx={{ display: ['grid'], mt: ['10px'], ml: [0] }}
              gap={[4, 5, 5, 6]}
            >
              <Box sx={{}}>
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
              <Box sx={{ pr: [0] }}>
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
                  fontSize: [1, 1, 1, 2],
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
                  fontSize: [2, 2, 2, 3],
                }}
              >
                Please try changing the settings in the filter panel and try
                again.
              </Box>
            </Box>
          )}
        </FadeIn>
      )}
    </Box>
  )
}

export default memo(List)
