import { memo } from 'react'
import { Box, Input, Grid, Text, Divider } from 'theme-ui'
import Search from './search'
import Metadata from './metadata'
import Toggles from './toggles'
import Charts from './charts'

const Sidebar = ({
  highlighted,
  filtered,
  data,
  filters,
  setFilters,
  setBounds,
}) => {
  return (
    <Box
      sx={{
        borderWidth: '0px',
        borderRightWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'muted',
      }}
    >
      <Box
        sx={{
          display: ['none', 'none', 'inherit'],
          position: 'sticky',
          top: 55,
          height: 'fit-content',
          pt: '14px',
          mt: '-14px',
        }}
      >
        <Box sx={{ mb: [1] }}>
          <Search filters={filters} setFilters={setFilters} />
        </Box>
        <Metadata filters={filters} setFilters={setFilters} />
        <Divider sx={{ my: [3] }} />
        <Toggles filters={filters} setFilters={setFilters} />
        <Divider sx={{ my: [3] }} />
        <Charts
          highlighted={highlighted}
          filtered={filtered}
          data={data}
          setBounds={setBounds}
        />
      </Box>
    </Box>
  )
}

export default Sidebar
