import React from 'react'

interface SingnInPagePrams{
  params:{'sign-in':string}
}

const SignInPage: React.FC<SingnInPagePrams> = ({params}) => {
  return (
    <div>SignInPage</div>
  )
}

export default SignInPage