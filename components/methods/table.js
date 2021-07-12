import { Box, Grid } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { Check } from '@carbonplan/icons'
import Squares from '../projects/report/graphics/squares'

const Table = ({ one, two, three, type, children }) => {
  let width
  if (type == 'icons') width = '50px'
  if (type == 'squares') width = '100px'

  const TableRow = ({ children, final }) => {
    return (
      <Row
        columns={[6]}
        sx={{
          borderStyle: 'solid',
          borderWidth: '0px',
          borderTopWidth: '1px',
          borderColor: 'muted',
          pt: [3],
          borderBottomWidth: final ? '1px' : '0px',
          pb: final ? [4] : [4],
        }}
      >
        {children}
      </Row>
    )
  }

  let starts, widths
  if (type === 'icons') {
    starts = [1, 2]
    widths = [1, 5]
  }
  if (type === 'squares') {
    starts = [1, 3]
    widths = [2, 4]
  }

  return (
    <Box
      sx={{
        my: [6, 6, 6, 7],
      }}
    >
      <TableRow final={type == 'icons'}>
        <Column start={[starts[0]]} width={[widths[0]]}>
          {type == 'icons' && (
            <Check
              sx={{ width: 22, height: 22, mt: ['1px'], strokeWidth: 1.5 }}
            />
          )}
          {type == 'squares' && (
            <Box sx={{ mt: ['9px'] }}>
              <Squares data={2} />
            </Box>
          )}
        </Column>
        <Column start={[starts[1]]} width={[widths[1]]}>
          <Box
            sx={{
              pt: [1],
              mb: [1],
              fontSize: [2, 2, 2, 3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
            }}
          >
            {three}
          </Box>
        </Column>
      </TableRow>
      {type == 'squares' && (
        <Box>
          <TableRow>
            <Column start={[starts[0]]} width={[widths[0]]}>
              <Box sx={{ mt: ['9px'] }}>
                <Squares data={1} />
              </Box>
            </Column>
            <Column start={[starts[1]]} width={[widths[1]]}>
              <Box
                sx={{
                  pt: [1],
                  mb: [1],
                  fontSize: [2, 2, 2, 3],
                  fontFamily: 'faux',
                  letterSpacing: 'faux',
                }}
              >
                {two}
              </Box>
            </Column>
          </TableRow>
          <TableRow final={true}>
            <Column start={[starts[0]]} width={[widths[0]]}>
              {type == 'icons' && <Ex />}
              {type == 'squares' && (
                <Box sx={{ mt: ['11px'] }}>
                  <Squares data={0} />
                </Box>
              )}
            </Column>
            <Column start={[starts[1]]} width={[widths[1]]}>
              <Box
                sx={{
                  pt: ['6px'],
                  mb: [1],
                  fontFamily: 'faux',
                  letterSpacing: 'faux',
                  fontSize: [2, 2, 2, 3],
                }}
              >
                {one}
              </Box>
            </Column>
          </TableRow>
        </Box>
      )}
    </Box>
  )
}

export default Table
