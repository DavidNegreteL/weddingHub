import { Inter } from 'next/font/google'
import { Container } from '@mui/material'
import ResponsiveNav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container className="flex min-h-screen flex-column p-xl w-full max-w-full bg-secondary-2">
      <ResponsiveNav/>      
    </Container>
  )
}
