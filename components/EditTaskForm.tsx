'use client'
import * as React from 'react';
import { editTask } from '@/utils/actions';

interface Task{
    id:string;
    content:string;
    createdAt:string;
    completed:boolean;
}

interface EditTaskFormProps{
  task:Task
}

const EditTaskForm: React.FC<EditTaskFormProps> =  ({task}) => {
  const {id, content, completed} = task;
  return (
    <form
      action={editTask}
      className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'
    >
      <input type='hidden' name='id' value={id} />
      {/* content */}

      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='input input-bordered w-full'
      />

      {/* completed */}
      <div className='form-control my-4'>
        <label className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button className='btn btn-primary btn-block btn-sm'>edit</button>
    </form>
  )
}

export default EditTaskForm