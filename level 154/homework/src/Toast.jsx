import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Toast({content, expiresIn, background}) {
    const [hidden, setHidden] = useState(false)
    return (
        <>
        <div className={`w-100 h-100 ${hidden ? 'hidden' : ''}`} style={{backgroundColor: background}}>
            <p>{content}</p>
        </div>
        <button onClick={()=>{
            setHidden(false)
        setInterval(()=>{
            setHidden(true)
        },  expiresIn)
        }} className='border bg-gray-300'>make toast</button>
        </>
    )
}

export default Toast
