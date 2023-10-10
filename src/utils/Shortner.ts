"use server";

import { createClient, VercelKV } from "@vercel/kv";

let kv: VercelKV;

function createKVClient() {
    kv = createClient({
        url: process.env.KV_REST_API_URL ?? "",
        token: process.env.KV_REST_API_TOKEN ?? "",
    });
}
async function addUrl(url: string) {
    try {
        await kv.set('1jh32f', 'www.youtube.com');
    } catch (e) {
        console.log(e);
    }
}

async function getUrl(token: string) {
    try{
        await kv.get('1jh32f')
    } catch (e) {
        console.log(e);
    }
}