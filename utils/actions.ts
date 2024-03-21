'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content'),
        }
    })
    // v13 actions don't allow responses
    // this one just cleans cache on the path, so it fetches data again
    revalidatePath('/todos')
}

export const completeTodo = async (id) => {
    const todo = await db.todo.update({
        where: {id},
        data: {
            completed: true,
        }
    })

    revalidatePath('/todos')
}