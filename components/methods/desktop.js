import { Grid, Box, Text, Link } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Intro from './intro.js'
import Section from './section.js'
import TOC from './toc.js'

const Desktop = ({ section, setSection }) => {
  return (
    <Row>
      <Column start={[1]} width={[3]} dr={1}>
        <Box
          sx={{
            position: 'sticky',
            top: 80,
            height: 'fit-content',
          }}
        >
          <Intro setSection={setSection} />
          <TOC setSection={setSection} section={section}></TOC>
        </Box>
      </Column>
      <Column start={[5]} width={[1]}>
        <Box
          sx={{
            height: [
              'auto',
              'auto',
              'calc(100vh - 150px)',
              'calc(100vh - 196px)',
            ],
            borderWidth: '0px',
            borderLeftWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'muted',
            width: '1px',
            position: 'fixed',
            mt: [6, 6, 6, 7],
          }}
        ></Box>
      </Column>
      <Column start={[6]} width={[6]}>
        <Section section={section} />
      </Column>
    </Row>
  )
}

export default Desktop
