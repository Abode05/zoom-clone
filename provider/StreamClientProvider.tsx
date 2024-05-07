'use client'
import { tokenprovider } from '@/action/stream.action';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { ReactNode, use, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [vedioclient, setvesioclient] = useState<StreamVideoClient>()
    const { user, isLoaded } = useUser();
    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw Error('stream api key messing');
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: use?.name ||user?.id,
                image: user?.imageUrl,
                
            },
            tokenProvider:tokenprovider,


        }); 
        setvesioclient(client)
     }
        , [user, isLoaded])
    if(!vedioclient) return <Loader/>
  return (
    <StreamVideo client={vedioclient}>
        {children}
    </StreamVideo>
  );
};