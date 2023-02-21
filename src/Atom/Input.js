import React from 'react'
import input1 from '../Atom/Input.module.css'
export default function Input({type,placeholder,onChange}){
  return(
   <div >
    <input className={input1.input} type={type} placeholder={placeholder} onChange={onChange}/>
   </div>
  )
}