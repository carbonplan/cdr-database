import { Grid, Box, Text, Link } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Intro from './intro.js'
import Section from './section.js'
import TOC from './toc.js'

const Mobile = ({ section, setSection }) => {
  return (
    <Box>
      <Row>
        <Column start={[1]} width={[6, 6, 6, 6]}>
          <Intro setSection={setSection} />
        </Column>
      </Row>
      <Row>
        <Column start={[1]} width={[6, 6, 6, 6]}>
          <Box
            id='contents'
            sx={{
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderBottomWidth: ['1px', '1px', '0px'],
              borderTopWidth: ['1px', '1px', '0px'],
              height: ['fit-contents', 'fit-contents', '200px'],
              backgroundColor: 'background',
              zIndex: 500,
              position: 'sticky',
              top: '55px',
              pr: [1],
              pt: [2],
              pb: [3],
              ml: ['-16px', 0, 0],
              mr: ['-16px', 0, 0],
              pr: ['16px', 0, 0],
              pl: ['16px', 0, 0],
            }}
          >
            <TOC setSection={setSection} section={section}></TOC>
          </Box>
          <Section section={section} />
        </Column>
      </Row>
    </Box>
  )
}

export default Mobile
