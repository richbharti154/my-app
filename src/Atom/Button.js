import React from 'react'
import button1 from '../Atom/Button.module.css'
export default function Button({onClick,type}){
    return(
   <div>
    <button  className={button1.button}onClick={onClick} >AddEmoji</button>
 
   </div>
    )
}