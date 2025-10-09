import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl'>homework 1</h1>
        <hr />
        <Toast content="niggers niggers niggers" expiresIn={3000}  background="#f00"/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
      <h1 className='text-7xl'>homework 2</h1>
        <hr />
        
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default App
