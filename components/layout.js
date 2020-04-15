import Seo from './seo'
import Header from './header'
import Footer from './footer'
import { Container, Flex, Box } from 'theme-ui'
import { useColorMode } from 'theme-ui'

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()

  const toggle = (e) => {
    if (colorMode == 'light') setColorMode('dark')
    else setColorMode('light')
  }

  return (
    <>
      <Seo/>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Box
          sx={{
            width: '100%',
            borderStyle: 'solid', 
            borderColor: 'muted',
            borderWidth: '0px', 
            borderBottomWidth: '1px',
            position: 'sticky', 
            top: 0,
            bg: 'background',
            height: '56px'
          }}>
          <Container sx={{ px: [4] }}>
          <Header></Header>
          </Container>
        </Box>
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}>
          <Container sx={{ px: [4] }}>
            <Flex sx={{ flexWrap: 'wrap' }}>
              { children }
            </Flex>
          </Container>
        </Box>
        <Box
          sx={{
            width: '100%'
          }}>
          <Container>
            <Box onClick={ toggle } sx={{ position: 'fixed', bottom: 20, right: 20 }}>
              { colorMode } 
            </Box>
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default Layout