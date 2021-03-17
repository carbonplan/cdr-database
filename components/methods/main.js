import { Box } from 'theme-ui'
import Desktop from './desktop'
import Mobile from './mobile'

const Main = ({ section, setSection }) => {
  return (
    <Box>
      <Box sx={{ display: ['none', 'none', 'initial'] }}>
        <Desktop section={section} setSection={setSection} />
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none'] }}>
        <Mobile section={section} setSection={setSection} />
      </Box>
    </Box>
  )
}

export default Main
