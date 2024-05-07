"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apisecret = process.env.STREAM_SECRET_KEY;

export const tokenprovider = async () => {
    const user = await currentUser();
    if (!user) throw Error('user is not logged in') 
    if (!apiKey) throw Error('no api key')
    if (!apisecret) throw Error('no api secret')
    const client = new StreamClient(apiKey, apisecret);
    
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const issused = Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(user.id, exp, issused);
    return token;
    
}