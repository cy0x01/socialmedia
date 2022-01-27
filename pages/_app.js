import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import GlobalLayout from '../components/GlobalLayout'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider enableSystem={true} attribute='class'>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  )
}

export default MyApp
