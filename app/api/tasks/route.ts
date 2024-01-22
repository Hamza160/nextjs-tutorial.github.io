import db from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
export const GET = async(request: NextRequest) => {
    const tasks = await db.task.findMany();
    return Response.json({data:tasks});
}

export const POST = async(request: NextRequest) => {
    const {content} = await request.json();
    const task = await db.task.create({
        data:{
            content
        }
    });
    return Response.json({data:task});
}

