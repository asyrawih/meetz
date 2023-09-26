'use client'
import Container from '@/components/custom/container'
import '@livekit/components-styles';
import Navbar from '@/components/custom/navbar'
import { JoinRoom } from '@/components/section/joinRoom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ControlBar, GridLayout, LiveKitRoom, ParticipantTile, RoomAudioRenderer, VideoConference, useTracks } from '@livekit/components-react'
import { Track } from 'livekit-client'

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
        </div>
      </Container>
    </main>
  )
}
