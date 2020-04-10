import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import theme from '../theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <style jsx global>{`
            body {
              overscroll-behavior: none;
            }

            .no-focus-outline a:focus,
            .no-focus-outline button:focus,
            .no-focus-outline input:focus,
            .no-focus-outline select:focus {
              outline: none !important;
            }
          `}
        </style>
      </ThemeProvider>
    )
  }
}

export default MyApp