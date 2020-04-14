import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import theme from '../theme'

const prefix = 'https://storage.googleapis.com/carbonplan-assets/fonts/relative/'

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

            @font-face {
              font-family: 'relative-medium-pro';
              src: url('${prefix}relative-medium-pro.eot');
              src: url('${prefix}relative-medium-pro.eot?#iefix') format('embedded-opentype'),
                   url('${prefix}relative-medium-pro.woff2') format('woff2'),
                   url('${prefix}relative-medium-pro.woff') format('woff'),
                   url('${prefix}relative-medium-pro.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          `}
        </style>
      </ThemeProvider>
    )
  }
}

export default MyApp