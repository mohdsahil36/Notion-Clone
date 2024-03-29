import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { ThemeProvider } from '@/components/ui/provider/theme-provider';
import { ConvexClientProvider } from '@/components/ui/provider/convex-provider';
import { Toaster } from 'sonner';
import { ModalProvider } from '@/components/ui/provider/modal-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The connected workspace where better, faster work happens.',
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme : light)",
        url:"/NotionLightModeLogo.svg",
        href:"/NotionLightModeLogo.svg"
      },
      {
        media:"(prefers-color-scheme : dark)",
        url:"/NotionDarkModeLogo.svg",
        href:"/NotionDarkModeLogo.svg"
      }
    ]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='notion-theme'
          >
            <Toaster position='bottom-center'/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
