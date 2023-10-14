import { kv } from '@vercel/kv';
import isURL from 'validator/es/lib/isURL';
import { BASE_URL } from "@/utils/Helper";

function generateToken() {
    const characters = '1234567890abcdefghijklmnopqrstuvwxyz';
    const uniqueChars = new Set();
    let token = '';

    // Generate the first character
    let firstCharacter = characters.charAt(Math.floor(Math.random() * 36));
    token += firstCharacter;
    uniqueChars.add(firstCharacter);

    // Generate the remaining 5 unique characters
    while (uniqueChars.size < 6) {
        let randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        if (!uniqueChars.has(randomCharacter)) {
            token += randomCharacter;
            uniqueChars.add(randomCharacter);
        }
    }

    return token;
}

async function ifTokenExists(token: string) {
    try {
        return await kv.exists(token) ?? 1;
    } catch (e) {
        console.log(e);
    }
}

async function getTokenUrl(token: string): Promise<string> {
    let value = '';
    try {
        value = await kv.get(token) ?? '';
    } catch (e) {
        console.log(e);
    }
    return value;
}

async function createKeyPair(key: string, value:string) {
    try {
        const ttl = Number(process.env.KV_TTL) ?? 3 * 24 * 60 * 60;
        await kv.set(key, value);
        await kv.expire(key, ttl);
    } catch (e) {
        console.log(e);
    }
}

async function shortenUrl(url: string): Promise<string> {
    let token = '';
    if(isURL(url, { protocols: ['https', 'http'] })) {
        do {
            token = generateToken();
        } while (await ifTokenExists(token))
        await createKeyPair(token, url);

    }
    return BASE_URL+token;
}


export  { shortenUrl, getTokenUrl };