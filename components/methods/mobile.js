import { Grid, Box, Text, Link } from 'theme-ui'
import Sources from '../../methods/sources.md'
import Metrics from '../../methods/metrics.md'
import Feedback from '../../methods/feedback.md'
import Projects from '../../methods/projects.md'
import TOC from './toc.js'

const Mobile = ({ section, setSection }) => {
  return (
    <Box>
      <Box>
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
        <Text sx={{ maxWidth: '800px', fontSize: [2, 3, 3] }}>
          Descriptions of our metrics and notes on each carbon removal project
          we have analyzed. Check out the{' '}
          <Link onClick={() => setSection('feedback')}>feedback</Link> section
          if you have questions or want to get in touch.
        </Text>
      </Box>
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
        <Box
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderLeftWidth: ['0px', '0px', '1px'],
            pl: [1],
            pr: [1],
            mt: '106px',
          }}
        >
          <Box sx={{ mt: ['-80px', '-80px', '-50px'] }}>
            {section == 'sources' && <Sources />}
            {section == 'metrics' && <Metrics />}
            {section == 'feedback' && <Feedback />}
            {section == 'projects' && <Projects />}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Mobile
