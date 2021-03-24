import { memo, useState, useEffect } from 'react'
import { Box, Input, Styled, Grid, Text, Divider, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Search from './search'
import Metadata from './metadata'
import Charts from './charts'
import Mobile from './mobile'

const Sidebar = ({
  highlighted,
  filtered,
  data,
  filters,
  setFilters,
  bounds,
  setBounds,
  tooltips,
  mobileFilterExpanded,
}) => {
  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  return (
    <Box sx={{ zIndex: 100 }}>
      <Box
        sx={{
          position: ['initial', 'initial', 'sticky'],
          position: 'sticky',
          top: 56,
          height: ['fit-content', 'fit-content', 'calc(100vh - 56px)'],
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            width: 0,
            background: 'transparent',
          },
          scrollbarWidth: 'none',
        }}
      >
        <Text
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'heading',
            fontSize: [6],
            pt: [1, 3, 3],
            mb: [1],
            mt: [0],
          }}
        >
          CDR Database
        </Text>
        <Box sx={{ fontSize: [2], maxWidth: '90%', pb: [3, 3, 1] }}>
          <Text sx={{ pt: [0, 0, 1], mb: [0, 0, 1], pb: [0, 0, 3] }}>
            These are reports on public Carbon Dioxide Removal project
            proposals. Built for transparency. Download as a{' '}
            <Link href={'/research/cdr-database/CarbonPlan-CDR-Database.json'} download>
              JSON
            </Link>{' '}
            or{' '}
            <Link href={'/research/cdr-database/CarbonPlan-CDR-Database.csv'} download>
              CSV
            </Link>
            . Read our{' '}
            <NextLink href={'/research/cdr-database/methods'} passHref>
              <Link>methods</Link>
            </NextLink>
            .
          </Text>
        </Box>
        <Box sx={{ display: ['none', 'none', 'initial'] }}>
          <Divider sx={{ mr: ['24px'], mt: [0], mb: [0] }} />
          <Box sx={{ mb: [1], mt: [3] }}>
            <Search setSearch={setSearch} tooltips={tooltips} />
          </Box>
          <Metadata
            filters={filters}
            setFilters={setFilters}
            tooltips={tooltips}
          />
          <Divider sx={{ my: [0], mt: ['11px'], mr: ['24px'] }} />
          <Charts
            highlighted={highlighted}
            filtered={filtered}
            data={data}
            bounds={bounds}
            setBounds={setBounds}
            tooltips={tooltips}
          />
        </Box>
        <Box sx={{ display: ['initial', 'initial', 'none'] }}>
          <Mobile
            filters={filters}
            setFilters={setFilters}
            expanded={mobileFilterExpanded}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
