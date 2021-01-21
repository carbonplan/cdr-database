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
          position: ['initial', 'initial', 'sticky'],
          position: 'sticky',
          top: 56,
          height: 'fit-content',
        }}
      >
        <Text
          as='h1'
          variant='styles.h1'
          sx={{ pt: [3, 3, 4], mb: [3, 3, 4], mt: [2, 2, 0] }}
        >
          Reports
        </Text>
        <Box sx={{ maxWidth: '750px', pb: [3, 3, 0] }}>
          <Styled.p>
            A public database of reports on carbon removal project proposals.
          </Styled.p>
        </Box>
        <Box sx={{ display: ['none', 'none', 'initial'] }}>
          <Divider sx={{ mr: [4], mt: [0, 0, 4], mb: [0, 0, 0] }} />
          <Box sx={{ mb: [1], mt: [3] }}>
            <Search filters={filters} setFilters={setFilters} />
          </Box>
          <Metadata filters={filters} setFilters={setFilters} />
          <Divider sx={{ my: [3], mr: [4] }} />
          <Charts
            highlighted={highlighted}
            filtered={filtered}
            data={data}
            setBounds={setBounds}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
