'use server';
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy:{
            'createdAt':'desc'
        }
    });
    return tasks;
}

export const createTask = async (formData: any) => {
    const content = await formData.get('content');
    await prisma.task.create({
        data:{
            content
        }
    })
    revalidatePath('/tasks');
}

export const deleteTask = async (formData: any) => {
    const id = formData.get('id')
    await prisma.task.delete({
        where:{
            id
        }
    })
    revalidatePath('/tasks');
}

export const getTask = async (id:string) => {
    const task = await prisma.task.findFirst({
        where:{id}
    })
    return task;
}

export const editTask = async (formData: any) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
    await prisma.task.update({
        where:{id},
        data:{
            content,
            completed: completed === 'on' ? true : false,
        }
    })
    redirect('/tasks')
} 