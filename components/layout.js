import Seo from './seo'
import Header from './header'
import Footer from './footer'
import { Container, Flex, Box } from 'theme-ui'

const Layout = ({ children }) => {
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
          <Header></Header>
        </Box>
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}>
          <Container>
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
            <Footer></Footer>
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default Layout