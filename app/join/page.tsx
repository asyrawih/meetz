'use client'
import { FocusLayout, LiveKitRoom, VideoConference, useToken } from "@livekit/components-react";
import '@livekit/components-styles';

export default function Room() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(location.search) : null;
  const roomName = params?.get('room') ?? 'test-room';
  const userIdentity = params?.get('user') ?? 'test-identity';

  const token = useToken(process.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT, roomName, {
    userInfo: {
      identity: userIdentity,
      name: userIdentity,
    },
  });

  const url = process.env.NEXT_PUBLIC_LK_SERVER_URL

  return (
    <section className="h-screen">
      <LiveKitRoom
        audio={false}
        video={true}
        data-lk-theme="default"
        token={token}
        serverUrl={url}
      >
        <VideoConference />
      </LiveKitRoom>
    </section>
  )
}

