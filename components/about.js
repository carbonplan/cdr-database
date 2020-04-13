import { Box, Heading } from 'theme-ui'

const About = () => {
  return (
    <Box
      sx={{
        height: '45vh',
        borderStyle: 'solid', 
        borderColor: 'muted', 
        borderWidth: '0px', 
        borderTopWidth: '1px',
        p: [4]
      }}
    >
      <Heading sx={{ fontSize: [5] }}>
        about
      </Heading>
    </Box>
  )
}

export default About
