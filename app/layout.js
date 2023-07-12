import './globals.css'

export const metadata = {
  title: 'Frontend Mentor | Results summary component',
  description: 'Challenge from Frontendmentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}