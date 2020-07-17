import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme-ui'
import { Style } from '@carbonplan/components'
import { useStore } from '../store'

import theme from '../theme'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
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
  )
}
