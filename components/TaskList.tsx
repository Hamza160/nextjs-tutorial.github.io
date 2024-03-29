import * as React from 'react';
import Link from 'next/link';
import { getAllTasks } from '@/utils/actions';
import DeleteFormCustom from './DeleteFormCustom';

const TaskList = async () => {
    const tasks = await getAllTasks();

    if(tasks.length === 0){
        return <h2 className='mt-8 font-medium text-lg'>No Tasks To Show...</h2>
    }

    return (
        <ul className='mt-8'>
            {tasks.map(task => (
                <li key={task.id} className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
                    <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
                        {task.content}
                    </h2>
                    <div className='flex gap-6 items-center'>
                        <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
                            edit
                        </Link>
                        <DeleteFormCustom id={task.id}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList