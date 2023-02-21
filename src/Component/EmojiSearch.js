import React from 'react'
import {useState,useEffect} from 'react'
import style from './EmojiSearch.module.css'
import Input from '../Atom/Input'
 import {data1} from '../Data/DataJson'
 import Button from '../Atom/Button'


export default function EmojiSearch(){
   const[search,setSearch]=useState('')
   const[data,setData]=useState(data1)
     function deleteButton(index){
    const newData1=data.filter((element)=>element!==data1[index])
    console.log(newData1)
     setData([...newData1])

  }

   useEffect(()=>{
    const newData=data1.filter((emoji)=>emoji.Title.toLowerCase().includes(search.toLowerCase()))
    console.log(newData)
    setData(newData)
    },[search])
   
    function handleClick(){
   alert(' Are you sure DeletEmoji😎🤣😣😥🧡')
 }
    
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
           
           <div className={style.cardContainer}>
           {data.map((element,index)=>{return(
            <div className={style.card}>
                <p onClick={handleClick}>
               {element.symbol} {element.Title}
              
               <Button 
               onClick={()=>deleteButton(index)} Delete button/> 
             </p> 
              </div>
               
            
            
           )})}
         </div>
           
           </div>
          
         
            
              
        
       
    )
}