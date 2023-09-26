import Container from '@/components/custom/container'
import Navbar from '@/components/custom/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container className='flex'>
        <div className='flex flex-col'>
          <h3 className='text-5xl flex mx-2 my-2'>
            Rapat Video Premium Sekarang gratis untuk semua orang
          </h3>
          <div className='my-3'></div>
          <h4 className='text-xl mx-2 my-2'>
            Nikmati Layanan Video Confrance Secara Gratis <br />
            Dengan Performa Yang Cukup Cepat
            Letency dibawah 100ms dengan concurent user yang
            Cukup Banyak Dalam Tiap Room Nya
          </h4>
          <div className='mx-2 my-2'>
            <Button variant={'outline'}>Rapat Instant</Button>
          </div>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-xl mx-2 my-2'>
            Nikmati Layanan Video Confrance Secara Gratis <br />
            Dengan Performa Yang Cukup Cepat
            Letency dibawah 100ms dengan concurent user yang
            Cukup Banyak Dalam Tiap Room Nya
          </h4>
        </div>
      </Container>
    </main>
  )
}
