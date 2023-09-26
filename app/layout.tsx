import './globals.css'
import { ThemeProvider } from '@/components/custom/theme-provider'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='dark:bg-card'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
