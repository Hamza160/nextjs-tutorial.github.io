import Link from 'next/link';
import * as React from 'react';

const AboutInfoPage = () => {
  return (
    <div>
        <h1 className='text-7xl'>AboutInfoPage</h1>
        <Link href={'/'} className='text-2xl'>Home Page</Link>
    </div>
  );
}

export default AboutInfoPage;