import * as React from 'react';
import { createTask } from '@/utils/actions';

const TaskForm =  async () => {
  return (
    <form action={createTask}>
        <div className='join w-ful'>
            <input 
                type="text" 
                name='content'
                className='input input-bordered join-item w-full' 
                placeholder='type here...'
                required={true}    
            />
            <button type='submit' className='btn btn-primary join-item'>
                create task
            </button>
        </div>
    </form>
  )
}

export default TaskForm