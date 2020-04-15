import { Box, Flex, Container } from 'theme-ui'

const Header = () => {
  return <Container>
    <Flex
      sx={{
        margin: '0 auto',
        width: '100%',
        justifyContent: 'space-between',
        py: [3]
      }}
    >
    <Box>
      (carbon)plan
    </Box>
    <Box>
      menu
    </Box>
  </Flex>
  </Container>
}

export default Header