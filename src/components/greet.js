import React from 'react'

function Greet({name}) {
  return (
    <div className='greet--box'>
      <h2 className='greet--name'>Greet {name}</h2>
      <h1 className='greet-heading'>This is a heading</h1>
      <p className='greet--para'>This is a paragraph</p>
      <button className='greet--btn'>Click Me</button>
    </div>
  )
}

export default Greet