import React from 'react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import theme from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider
      domain='carbonplan.org'
      trackOutboundLinks
      trackFileDownloads
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default App
