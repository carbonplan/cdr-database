import { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { SessionProvider } from '../lib/session'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import theme from '../theme'

const App = ({ Component, pageProps }) => {
  const [session, setSession] = useState({ token: null, username: null })
  return (
    <SessionProvider session={session} setSession={setSession}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
