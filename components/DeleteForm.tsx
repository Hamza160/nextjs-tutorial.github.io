import { deleteTask } from '@/utils/actions';
import * as React from 'react';

const DeleteForm = async ({id}:{id:string}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id}/>
      <button type='submit' className='btn btn-error btn-xs'>delete</button>
    </form>
  )
}

export default DeleteForm