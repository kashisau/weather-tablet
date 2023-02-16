import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { type ReactElement } from 'react'

const outfit = localFont({
  src: [
    {
      path: '../fonts/Outfit-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Outfit-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </>)
}
