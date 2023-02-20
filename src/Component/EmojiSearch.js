import React from 'react'
import {useState,useEffect} from 'react'
import style from './EmojiSearch.module.css'
import Input from '../Atom/Input'
 import {data1} from '../Data/DataJson'
// import Button from '../Atom/Button'

export default function EmojiSearch(){
   const[search,setSearch]=useState('')
   const[mappingData,setMappindData]=useState(data1)
   
  
   useEffect(()=>{
    console.log(search)
    },[search])
    
    return(
        <div>
        <div className={style.EmojiSearch}>
        <div className={style.menu}>
            
            <h1 className={style.heading}>EmojiSearch</h1>
            <p className={style.search}>A simple searchEmoji with react</p>
            </div> 
          
           <Input className={style.Input}  type='name' placeholder='Search' value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
             </div>
           
           {/* <Button onClick={handleClick} /> */}
           {mappingData.map((element)=>{return(
            <div>
            {element.Title}
            </div>
           )})}
           </div>
          
         
            
              
        
       
    )
}