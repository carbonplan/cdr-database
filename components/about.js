import { Box, Heading } from 'theme-ui'

const About = () => {
  return (
    <Box
      sx={{
        height: '50vh',
        borderStyle: 'solid', 
        borderColor: 'primary', 
        borderWidth: '0px', 
        borderBottomWidth: '1px',
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
