import { Box, Grid } from 'theme-ui'
import Check from './icons/check'
import Question from './icons/question'
import Ex from './icons/ex'
import Squares from './graphics/squares'

const Table = ({ one, two, three, type, children }) => {

  let width 
  if (type == 'icons') width = '50px'
  if (type == 'squares') width = '100px'

  const Row = ({ children, final }) => {
    return <Grid columns={[width + ' 1fr']} sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        py: [2],
        mb: [2],
        mr: [7],
        borderBottomWidth: final ? '1px' : '0px',
        pb: final ? [3] : [0]
      }}>
      { children }
    </Grid>
  }

  return (
    <Box sx={{ 
      my: [4]
    }}>
      <Row>
        {(type == 'icons') && <Check/>}
        {(type == 'squares') && <Squares data={2}/>}
        <Box sx={{ pt: [1], mb: [1], fontFamily: 'faux', letterSpacing: 'faux' }}>
          { three }
        </Box>
      </Row>
      <Row>
        {(type == 'icons') && <Question/>}
        {(type == 'squares') && <Squares data={1}/>}
        <Box sx={{ pt: [1], mb: [1], fontFamily: 'faux', letterSpacing: 'faux' }}>
          { two }
        </Box>
      </Row>
      <Row final={true}>
        {(type == 'icons') && <Ex/>}
        {(type == 'squares') && <Squares data={0}/>}
        <Box sx={{ pt: ['6px'], mb: [1], fontFamily: 'faux', letterSpacing: 'faux' }}>
          { one }
        </Box>
      </Row>
    </Box>
  )
}

export default Table