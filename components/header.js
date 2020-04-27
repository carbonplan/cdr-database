import { Box, Flex, MenuButton } from 'theme-ui'
import Logo from './logo'

const Header = () => {
  return <Flex
    sx={{
      margin: '0 auto',
      width: '100%',
      justifyContent: 'space-between',
      pt: ['12px'],
      pb: [3]
    }}
  >
    <Box>
      <Logo></Logo>
    </Box>
    <Box>
      <MenuButton aria-label='Toggle Menu' />
    </Box>
  </Flex>
}

export default Header