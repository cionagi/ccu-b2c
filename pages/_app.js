/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react'
import '../styles/app.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
