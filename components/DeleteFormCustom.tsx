'use client';
import { deleteTask } from '@/utils/actions';
import * as React from 'react';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
    const {pending} = useFormStatus();
    return (
        <button type='submit' className='btn btn-error btn-xs' disabled={pending}>
            {pending ? 'pending...' : 'delete'}
        </button>
    )
}

const DeleteFormCustom = async ({id}:{id:string}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id}/>
      <SubmitBtn />
    </form>
  )
}

export default DeleteFormCustom