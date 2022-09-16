import { memo, useState, useEffect } from 'react'
import { Box, Input, Styled, Grid, Text, Divider, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Tray } from '@carbonplan/components'
import Search from './search'
import Metadata from './metadata'
import Metrics from './metrics'
import Mobile from './mobile'
import Notice from '../notice'

const Sidebar = ({
  highlighted,
  filtered,
  data,
  filters,
  setFilters,
  bounds,
  setBounds,
  tooltips,
  settingsExpanded,
}) => {
  function setSearch(value) {
    setFilters((filters) => {
      return { ...filters, search: value }
    })
  }

  return (
    <>
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
          px: ['20px'],
          mx: ['-20px'],
        }}
      >
        <Notice />
        <Box
          sx={{
            pt: [3],
            pb: [3],
            fontSize: [6, 6, 6, 7],
            width: 'fit-content',
            fontFamily: 'heading',
            lineHeight: 'heading',
          }}
        >
          CDR Database
        </Box>
        <Box
          sx={{
            pt: [0],
            pb: [3, 3, 4, 4],
            mb: [0, 3, 0, 1],
            fontSize: [2, 2, 2, 3],
            fontFamily: 'body',
            lineHeight: 'body',
          }}
        >
          <Box>
            These are reports on public Carbon Dioxide Removal project
            proposals. Built for transparency. Download as a{' '}
            <Link
              href={'/research/cdr-database/projects.json'}
              download='CarbonPlan-CDR-Database.json'
            >
              JSON
            </Link>{' '}
            or{' '}
            <Link
              href={'/research/cdr-database/projects.csv'}
              download='CarbonPlan-CDR-Database.csv'
            >
              CSV
            </Link>{' '}
            (licensed as{' '}
            <Link href='https://creativecommons.org/licenses/by/4.0/'>
              CC-BY
            </Link>
            ). Read our{' '}
            <NextLink href={'/research/cdr-database/methods'} passHref>
              <Link>methods</Link>
            </NextLink>
            .
          </Box>
        </Box>
        <Box sx={{ display: ['none', 'none', 'initial'] }}>
          <Divider sx={{ mt: [0], mb: [0] }} />
          <Box sx={{ mb: [1], mt: [3] }}>
            <Search setSearch={setSearch} tooltips={tooltips} />
          </Box>
          <Metadata
            filters={filters}
            setFilters={setFilters}
            tooltips={tooltips}
            settingsExpanded={settingsExpanded}
          />
          <Divider sx={{ my: [0], mt: ['11px', '11px', '11px', '14px'] }} />
          <Metrics
            highlighted={highlighted}
            filtered={filtered}
            data={data}
            bounds={bounds}
            setBounds={setBounds}
            tooltips={tooltips}
          />
        </Box>
      </Box>
      <Tray expanded={settingsExpanded}>
        <Box sx={{ mb: [1], mt: [0, 0, 3, 3] }}>
          <Search setSearch={setSearch} tooltips={tooltips} />
        </Box>
        <Metadata
          filters={filters}
          setFilters={setFilters}
          tooltips={tooltips}
          settingsExpanded={settingsExpanded}
        />
      </Tray>
    </>
  )
}

export default Sidebar
