import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { queryClient } from '@/http/react-query'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </QueryClientProvider>
  )
}
