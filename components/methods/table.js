import { Box, Grid } from 'theme-ui'
import { Icons } from '@carbonplan/components'
import Squares from '../projects/report/graphics/squares'

const { Check } = Icons

const Table = ({ one, two, three, type, children }) => {
  let width
  if (type == 'icons') width = '50px'
  if (type == 'squares') width = '100px'

  const Row = ({ children, final }) => {
    return (
      <Grid
        columns={[1, 1, width + ' 1fr']}
        sx={{
          borderStyle: 'solid',
          borderWidth: '0px',
          borderTopWidth: '1px',
          borderColor: 'muted',
          py: [2],
          mb: [2],
          mr: [1, 1, 7],
          borderBottomWidth: final ? '1px' : '0px',
          pb: final ? [3] : [0],
        }}
      >
        {children}
      </Grid>
    )
  }

  return (
    <Box
      sx={{
        my: [4],
      }}
    >
      <Row final={type == 'icons'}>
        {type == 'icons' && <Check />}
        {type == 'squares' && <Squares data={2} />}
        <Box
          sx={{ pt: [1], mb: [1], fontFamily: 'faux', letterSpacing: 'faux' }}
        >
          {three}
        </Box>
      </Row>
      {type == 'squares' && (
        <Box>
          <Row>
            <Squares data={1} />
            <Box
              sx={{
                pt: [1],
                mb: [1],
                fontFamily: 'faux',
                letterSpacing: 'faux',
              }}
            >
              {two}
            </Box>
          </Row>
          <Row final={true}>
            {type == 'icons' && <Ex />}
            {type == 'squares' && <Squares data={0} />}
            <Box
              sx={{
                pt: ['6px'],
                mb: [1],
                fontFamily: 'faux',
                letterSpacing: 'faux',
              }}
            >
              {one}
            </Box>
          </Row>
        </Box>
      )}
    </Box>
  )
}

export default Table
