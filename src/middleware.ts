import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import ltrim = validator.ltrim;
import { getTokenUrl } from "@/utils/Shortener";

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.png|favicon.ico|me.jpg|about|pricing|privacy|terms|how-it-works).+)']
}
export async function middleware(req: NextRequest) {
    const token = ltrim(req.nextUrl.pathname, '/');
    const url = await getTokenUrl(token);
    if (url) {
        return NextResponse.redirect(new URL(url));
    }
}