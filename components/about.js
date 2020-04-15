import { Box, Heading } from 'theme-ui'

const About = () => {
  return (
    <Box
      sx={{
        height: 'calc(50vh - 0.5*56px)',
        borderStyle: 'solid', 
        borderColor: 'muted', 
        borderWidth: '0px', 
        borderTopWidth: '1px',
        p: [4]
      }}
    >
      <Heading sx={{ fontSize: [5] }}>
        methods
      </Heading>
    </Box>
  )
}

export default About
