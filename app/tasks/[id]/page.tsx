import EditTaskForm from '@/components/EditTaskForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';
import * as React from 'react';

interface Param{
    id:string
}

interface EditTaskPagePrams{
    params:Param
}

const EditTaskPage: React.FC<EditTaskPagePrams> = async ({params}) => {
    const {id} = params;
    const task = await getTask(id);

    if(!task){
        return <h1>No Task Found....</h1>
    }

    return (
        <>
            <div className='mb-16'>
                <Link href='/tasks' className='btn btn-accent'>
                Back to Tasks
                </Link>
            </div>
            <EditTaskForm task={task} />
            </>
    )
}

export default EditTaskPage