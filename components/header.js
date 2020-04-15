import { Box, Flex, MenuButton } from 'theme-ui'

const Header = () => {
  return <Flex
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
      <MenuButton aria-label='Toggle Menu' />
    </Box>
  </Flex>
}

export default Header