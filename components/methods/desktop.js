import { Grid, Box, Text, Link } from 'theme-ui'
import Sources from '../../methods/sources.md'
import Metrics from '../../methods/metrics.md'
import Feedback from '../../methods/feedback.md'
import Projects from '../../methods/projects.md'
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
        <Text
          sx={{
            fontSize: [6],
            fontFamily: 'heading',
            letterSpacing: 'heading',
            pt: [1, 3, 3],
            mb: [1],
          }}
        >
          Methods
        </Text>
        <Text sx={{ pt: [1], fontSize: [2] }}>
          Descriptions of our metrics and notes on each carbon removal project
          we have analyzed. Check out the{' '}
          <Link onClick={() => setSection('feedback')}>feedback</Link> section
          if you have questions or want to get in touch.
        </Text>
        <TOC setSection={setSection} section={section}></TOC>
      </Box>
      <Box
        sx={{
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderLeftWidth: ['0px', '0px', '1px'],
          pl: [1, 1, 5],
          pr: [1, 1, 7],
          pt: [1],
          pb: [4],
        }}
      >
        <Box sx={{ mt: ['-80px', '-80px', '-50px'] }}>
          {section == 'sources' && <Sources />}
          {section == 'metrics' && <Metrics />}
          {section == 'feedback' && <Feedback />}
          {section == 'projects' && <Projects />}
        </Box>
      </Box>
    </Grid>
  )
}

export default Desktop
