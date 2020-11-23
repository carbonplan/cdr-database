import { useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme-ui'
import { Style } from '@carbonplan/components'
import { useStore } from '../store'
import { SessionProvider } from '../lib/session'

import theme from '../theme'

const App = ({ Component, pageProps }) => {
  const [session, setSession] = useState({ token: null, username: null })
  const store = useStore(pageProps.initialReduxState)
  return (
    <SessionProvider session={session} setSession={setSession}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Style />
          <style jsx global>
            {`
              body {
                cursor: initial !important;
              }

              .mark-symbol {
                cursor: pointer;
              }
            `}
          </style>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  )
}

export default App