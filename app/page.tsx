import Container from '@/components/custom/container'
import Navbar from '@/components/custom/navbar'
import { JoinRoom } from '@/components/section/joinRoom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container className='flex flex-col my-auto mx-auto justify-center max-w-screen-xl items-center'>
        <JoinRoom className='w-full'>
        </JoinRoom>
      </Container>
    </main>
  )
}
