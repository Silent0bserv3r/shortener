"use server";

import { kv } from '@vercel/kv';

export async function testVercelKV(){
    try {
        await kv.set('1jh32f', 'www.youtube.com');
    } catch (e) {
        console.log(e);
    }

    try{
        console.log(await kv.get('1jh32f'));
    } catch (e) {
        console.log(e);
    }
}