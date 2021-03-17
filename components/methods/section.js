import { Box } from 'theme-ui'
import Sources from '../../methods/sources.md'
import Metrics from '../../methods/metrics.md'
import Feedback from '../../methods/feedback.md'
import Projects from '../../methods/projects.md'

const Section = ({ section }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderLeftWidth: ['0px', '0px', '1px'],
        pl: [1, 1, 5],
        pr: [1, 1, 7],
        pt: [0, 0, 1],
        pb: [0, 0, 4],
        mt: ['106px', '106px', 0],
      }}
    >
      <Box sx={{ mt: ['-80px', '-80px', '-50px'] }}>
        {section == 'sources' && <Sources />}
        {section == 'metrics' && <Metrics />}
        {section == 'feedback' && <Feedback />}
        {section == 'projects' && <Projects />}
      </Box>
    </Box>
  )
}

export default Section
