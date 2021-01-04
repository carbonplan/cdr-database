import { memo } from 'react'
import { Box, Grid, Text } from 'theme-ui'
import { Tag } from '@carbonplan/components'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange'
}

const Metadata = ({ filters, setFilters }) => {

  function toggleOption(value) {
    setFilters((filters) => {
      return { ...filters, [value]: !filters[value] }
    })
  }

  return <Box>
    <Grid columns={['100px 1fr']}>
      <Text variant='label'>SOURCE:</Text>
      <Box sx={{width: '250px'}}>
        {
          ['STRP2020', 'MSFT2021']
            .map(
              (d) => <Tag key={d} label={d} value={filters[d]} sx={{color: 'primary'}} onClick={() => toggleOption(d)} />
            )
        }
      </Box>
      </Grid>
    <Grid columns={['100px 1fr']}>
      <Text variant='label'>CATEGORY:</Text>
      <Box sx={{width: '250px'}}>
        {
          ['forests', 'soil', 'biomass', 'ocean', 'mineralization', 'dac']
            .map(
              (d) => <Tag key={d} label={d} value={filters[d]} sx={{color: colors[d]}} onClick={() => toggleOption(d)} />
            )
        }
      </Box>
    </Grid>
    <Grid columns={['100px 1fr']}>
      <Text variant='label'>MECHANISM:</Text>
      <Box sx={{width: '250px'}}>
        {
          ['removal', 'avoided']
            .map(
              (d) => <Tag key={d} label={d} value={filters[d]} sx={{color: colors[d]}} onClick={() => toggleOption(d)} />
            )
        }
      </Box>
    </Grid>
  </Box>
}

export default memo(Metadata)