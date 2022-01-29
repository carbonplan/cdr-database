import { Box } from 'theme-ui'
import Sources from '../../methods/sources.md'
import Metrics from '../../methods/metrics.md'
import Feedback from '../../methods/feedback.md'
import Projects from '../../methods/projects.md'
import Terms from '../../methods/terms.md'

const Section = ({ section }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderLeftWidth: ['0px', '0px', '0px'],
        pt: [0, 0, 0],
        pb: [6, 6, 6, 7],
        mt: ['106px', '116px', '107px', '109px'],
      }}
    >
      <Box sx={{ mt: ['-80px', '-80px', '-50px'] }}>
        {section == 'sources' && <Sources />}
        {section == 'metrics' && <Metrics />}
        {section == 'feedback' && <Feedback />}
        {section == 'projects' && <Projects />}
        {section == 'terms' && <Terms />}
      </Box>
    </Box>
  )
}

export default Section
