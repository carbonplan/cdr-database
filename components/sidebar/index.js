import { memo } from 'react'
import { Box, Input, Styled, Grid, Text, Divider } from 'theme-ui'
import Search from './search'
import Metadata from './metadata'
import Charts from './charts'

const Sidebar = ({
  highlighted,
  filtered,
  data,
  filters,
  setFilters,
  bounds,
  setBounds,
  tooltips,
  setTooltips,
}) => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          position: ['initial', 'initial', 'sticky'],
          position: 'sticky',
          top: 56,
          height: 'fit-content',
        }}
      >
        <Text
          as='h1'
          sx={{ fontSize: [6], pt: [2, 2, 3], mb: [1], mt: [2, 2, 0] }}
        >
          CDR Database
        </Text>
        <Box sx={{ fontSize: [2], maxWidth: '90%', pb: [3, 3, 1] }}>
          <Text sx={{ pt: [1], pb: [3] }}>
            Reports on public CDR project proposals. Download the raw data as
            JSON or CSV. <br /> Read our methods.
          </Text>
        </Box>
        <Box sx={{ display: ['none', 'none', 'initial'] }}>
          <Divider sx={{ mr: ['24px'], mt: [0], mb: [0] }} />
          <Box sx={{ mb: [1], mt: [3] }}>
            <Search
              filters={filters}
              setFilters={setFilters}
              tooltips={tooltips}
              setTooltips={setTooltips}
            />
          </Box>
          <Metadata
            filters={filters}
            setFilters={setFilters}
            tooltips={tooltips}
            setTooltips={setTooltips}
          />
          <Divider sx={{ my: [0], mt: ['11px'], mr: ['24px'] }} />
          <Charts
            highlighted={highlighted}
            filtered={filtered}
            data={data}
            bounds={bounds}
            setBounds={setBounds}
            tooltips={tooltips}
            setTooltips={setTooltips}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
