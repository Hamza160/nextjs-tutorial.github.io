'use client';
import * as React from 'react';
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
    const {pending} = useFormStatus();
    return (
        <button type='submit' className='btn btn-primary join-item' disabled={pending}>
            {pending ? 'please wait...' : 'create task'}
        </button>
    )
}

const initialState = {
    message:null
}

const TaskFormCustom = () => {
    const [state, formAction] = useFormState(createTaskCustom, initialState);
    React.useEffect(() => {
        if(state.message === 'error'){
            toast.error(`there was an error`);
            return;
        }

        if(state.message === 'success'){
            toast.success(`task created`);
            return;
        }

    }, [state]);
  return (
    <form action={formAction}>
        {state.message ? <p className='mb-2'>{state.message}</p> : null}
        <div className='join w-ful'>
            <input 
                type="text" 
                name='content'
                className='input input-bordered join-item w-full' 
                placeholder='type here...'
                required={true}    
            />
           <SubmitBtn />
        </div>
    </form>
  )
}

export default TaskFormCustom