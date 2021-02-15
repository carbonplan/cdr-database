import { memo, useState, useEffect } from 'react'
import { Box, Input, Styled, Grid, Text, Divider, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
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
}) => {
  const [selectedTooltips, setSelectedTooltips] = useState([])

  useEffect(() => {
    if (!tooltips) setSelectedTooltips([])
  }, [tooltips])

  return (
    <Box sx={{}}>
      <Box
        sx={{
          position: ['initial', 'initial', 'sticky'],
          position: 'sticky',
          top: 56,
          height: ['fit-content', 'fit-content', 'calc(100vh - 56px)'],
          overflowY: 'scroll',
        }}
      >
        <Text
          as='h1'
          sx={{ fontSize: [6], pt: [2, 2, 3], mb: [1], mt: [2, 2, 0] }}
        >
          CDR Database
        </Text>
        <Box sx={{ fontSize: [2], maxWidth: '90%', pb: [3, 3, 1] }}>
          <Text sx={{ pt: [1], mb: [1], pb: [1, 3, 3] }}>
            Reports on public CDR project proposals. Download as JSON or CSV.
            Read our{' '}
            <NextLink href={'/methods'} passHref>
              <Link>methods</Link>
            </NextLink>
            .
          </Text>
        </Box>
        <Box sx={{ display: ['none', 'none', 'initial'] }}>
          <Divider sx={{ mr: ['24px'], mt: [0], mb: [0] }} />
          <Box sx={{ mb: [1], mt: [3] }}>
            <Search
              filters={filters}
              setFilters={setFilters}
              tooltips={tooltips}
              selectedTooltips={selectedTooltips}
              setSelectedTooltips={setSelectedTooltips}
            />
          </Box>
          <Metadata
            filters={filters}
            setFilters={setFilters}
            tooltips={tooltips}
            selectedTooltips={selectedTooltips}
            setSelectedTooltips={setSelectedTooltips}
          />
          <Divider sx={{ my: [0], mt: ['11px'], mr: ['24px'] }} />
          <Charts
            highlighted={highlighted}
            filtered={filtered}
            data={data}
            bounds={bounds}
            setBounds={setBounds}
            tooltips={tooltips}
            selectedTooltips={selectedTooltips}
            setSelectedTooltips={setSelectedTooltips}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
