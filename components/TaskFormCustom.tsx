'use client'
import * as React from 'react';
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className='btn btn-primary join-item' disabled={pending}>
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'setMessage':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const TaskFormCustom = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      // Your logic to create a task goes here
      const content = event.target.elements.content.value;
      const result = await createTaskCustom({ message: null }, { content });

      // Dispatch success message
      dispatch({ type: 'setMessage', payload: 'success' });

      // Handle any additional logic based on the result
    } catch (error) {
      console.error('Error creating task:', error);

      // Dispatch error message
      dispatch({ type: 'setMessage', payload: 'error' });
    }
  };

  React.useEffect(() => {
    if (state.message === 'error') {
      toast.error(`there was an error`);
    }

    if (state.message === 'success') {
      toast.success(`task created`);
    }
  }, [state.message]);

  return (
    <form onSubmit={handleSubmit}>
      {state.message ? <p className='mb-2'>{state.message}</p> : null}
      <div className='join w-ful'>
        <input
          type='text'
          name='content'
          className='input input-bordered join-item w-full'
          placeholder='type here...'
          required={true}
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
