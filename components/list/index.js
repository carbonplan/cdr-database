import { memo } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import { Badge } from '@carbonplan/components'
import { format } from 'd3-format'
import Report from './report'
import Toggles from './toggles'

const List = ({ filters, setFilters, filtered, data, setHighlighted }) => {
  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          height: 'fit-content',
          top: 55,
          pb: [3],
          pt: '14px',
          mt: '-14px',
          mb: [2],
          ml: [0],
          backgroundColor: 'background',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          borderColor: 'muted',
          borderStyle: 'solid',
        }}
      >
        <Text
          variant='label'
          sx={{
            display: 'inline-block',

            mr: [2],
          }}
        >
          Total
        </Text>
        <Badge
          value={String(data.length).padStart(3, '0')}
          sx={{ ml: [1], fontSize: [2] }}
        />
        <Text
          variant='label'
          sx={{
            display: 'inline-block',
            ml: [3],
            mr: [2],
          }}
        >
          Selected
        </Text>
        <Badge
          value={String(filtered.count).padStart(3, '0')}
          sx={{ ml: [1] }}
        />
        <Text
          variant='label'
          sx={{
            display: 'inline-block',
            ml: [3],
            mr: [2],
          }}
        >
          Volume
        </Text>
        <Badge
          value={format('.2~s')(
            data
              .filter((d) => filtered[d.id])
              .map((d) => d.metrics[1].value)
              .reduce((a, b) => a + b, 0)
          )}
          sx={{ ml: [1] }}
        />
        <Toggles filters={filters} setFilters={setFilters} />
      </Box>
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
