import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Router from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PageChange from 'components/PageChange'
import Layout from 'hoc/Layout'
import { theme } from 'styles/theme';
import COMMON_CONSTANTS from 'constants/common'
import 'assets/scss/nextjs-material-kit.scss?v=1.0.0'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  document.body.classList.add('body-page-transition')
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  )
})

Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})

Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})

export default ({ Component, pageProps }) => {
  useEffect(() => {
    document.title = COMMON_CONSTANTS.TITLE
  })

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  )
}