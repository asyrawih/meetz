import Container from '@/components/custom/container'
import Navbar from '@/components/custom/navbar'
import { JoinRoom } from '@/components/section/joinRoom'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container className='flex mx-auto justify-between max-w-screen-xl items-center'>
        <JoinRoom className='w-full'>
          <Card>
            <CardHeader className='justify-center items-center'>Join Meet</CardHeader>
            <CardContent>
              <Input placeholder='Join Room' />
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </JoinRoom>
      </Container>
    </main>
  )
}
