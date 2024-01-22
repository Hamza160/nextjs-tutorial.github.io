import { request } from "http"
import { NextResponse } from "next/server"

export function middleware(request: Request){
    console.log(`Hello There`);
    // return Response.json({msg: 'Hello There'})
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    // matcher:['/about/:path*', '/tasks/:path*']
    matcher:['/about/:path*']
}