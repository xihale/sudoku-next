import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sudoku by xihale',
  description: 'A sudoku game designed by xihale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
