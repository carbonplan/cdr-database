import { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { Fonts, Globals } from '@carbonplan/components'
import { SessionProvider } from '../lib/session'

import theme from '../theme'

const App = ({ Component, pageProps }) => {
  const [session, setSession] = useState({ token: null, username: null })
  return (
    <SessionProvider session={session} setSession={setSession}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Fonts />
        <Globals />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
