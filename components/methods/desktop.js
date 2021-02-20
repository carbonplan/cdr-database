import { Grid, Box, Text, Link } from 'theme-ui'
import Intro from './intro.js'
import Section from './section.js'
import TOC from './toc.js'

const Desktop = ({ section, setSection }) => {
  return (
    <Grid columns={[1, 1, 'minmax(300px, 30%) auto']} gap={['0px']}>
      <Box
        sx={{
          position: 'sticky',
          top: 56,
          height: 'fit-content',
          pr: ['24px'],
        }}
      >
        <Intro setSection={setSection} />
        <TOC setSection={setSection} section={section}></TOC>
      </Box>
      <Section section={section} />
    </Grid>
  )
}

export default Desktop
