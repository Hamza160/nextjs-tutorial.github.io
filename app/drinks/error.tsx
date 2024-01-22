'use client';

function error(error: any) {
    console.log(error)
  return (
    // <div>there was an error...</div>
    <div>{error.error.message}</div>
  )
}

export default error