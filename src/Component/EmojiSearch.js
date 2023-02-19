import React from 'react'
import {useState} from 'react'
import style from './EmojiSearch.module.css'
import Input from '../Atom/Input'
import Button from '../Atom/Button'
export default function EmojiSearch(){
   const[search,setSearch]=useState('')
   function handleClick(){

   }
    return(
        <div className={style.EmojiSearch}>
        <div className={style.menu}>
            <h1 className={style.heading}>EmojiSearch</h1>
            <p className={style.search}>A simple searchEmoji with react</p>
            </div> 
           
           <Input className={style.Input}  type='name' placeholder='Search' value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
             <Button onClick={handleClick}  />
            
       
     
           
     
      

        </div>
       
    )
}