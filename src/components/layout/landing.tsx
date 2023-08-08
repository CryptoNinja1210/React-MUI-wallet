import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
    
const theme = createTheme({})

const cache = createCache({
  key: 'css',
  prepend: true,
})

export default function Layout  ({
    children,
  }: {
    children: React.ReactNode
  }) {

  return(
    <>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
