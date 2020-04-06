import Seo from './seo'
import { Container, Flex } from 'theme-ui'

const Layout = ({ children }) => {
  return (
    <>
      <Seo/>
      <Container>
        <Flex sx={{ flexWrap: 'wrap' }}>
          {children}
        </Flex>
      </Container>
    </>
  )
}

export default Layout