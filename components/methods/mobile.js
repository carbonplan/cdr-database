import { Grid, Box, Text, Link } from 'theme-ui'
import Intro from './intro.js'
import Section from './section.js'
import TOC from './toc.js'

const Mobile = ({ section, setSection }) => {
  return (
    <Box>
      <Intro setSection={setSection} />
      <Box>
        <Box
          id='contents'
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: ['1px', '1px', '0px'],
            height: ['fit-contents', 'fit-contents', '200px'],
            backgroundColor: 'background',
            zIndex: 500,
            position: 'sticky',
            top: '56px',
            pr: [1],
            pb: [2],
          }}
        >
          <TOC setSection={setSection} section={section}></TOC>
        </Box>
        <Section section={section} />
      </Box>
    </Box>
  )
}

export default Mobile
