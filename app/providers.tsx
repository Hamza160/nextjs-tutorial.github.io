'use client';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

const Providers: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <Toaster/>
      {children}
    </>
  );
}

export default Providers;