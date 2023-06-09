import type { AppProps } from 'next/app'
import type { NextComponentType, NextPageContext, NextLayoutComponentType } from 'next'
import type { ReactNode } from 'react'

declare module 'next' {
  type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = any> = AppProps & {
    Component: NextLayoutComponentType<P>
    pageProps: any
  }
}
