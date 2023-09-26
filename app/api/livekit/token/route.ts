
import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';
import type { AccessTokenOptions, VideoGrant } from 'livekit-server-sdk';

const apiKey = process.env.LK_API_KEY;
const apiSecret = process.env.LK_API_SECRET;

const createToken = (userInfo: AccessTokenOptions, grant: VideoGrant) => {
  const at = new AccessToken(apiKey, apiSecret, userInfo);
  at.addGrant(grant);
  return at.toJwt();
};

/// TODO Need change as client side fetch
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const roomName = searchParams.get("roomName") ?? "sample-room"
  const identity = searchParams.get("identity") ?? "john doe"
  const name = searchParams.get("name") ?? "test"
  const metadata = searchParams.get("metadata") ?? ""


  const grant: VideoGrant = {
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  };

  const token = createToken({ identity, name, metadata }, grant);


  return NextResponse.json({ identity, accessToken: token })
}
