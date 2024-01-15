'use client';
import * as React from 'react';

const ClientPage = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
        <h1 className='text-7xl font-bold mb-4'>{count}</h1>
        <button className='btn btn-primary mr-2' onClick={() => setCount((count) => count + 1)}>increase</button>
        <button className='btn btn-primary' onClick={() => setCount((count) => count - 1)}>decrease</button>
    </div>
  )
}

export default ClientPage;