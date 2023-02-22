import React from 'react'
import {useState,useEffect} from 'react'
import style from './EmojiSearch.module.css'
import Input from '../Atom/Input'
//  import Button from '../Atom/Button'


export default function EmojiSearch(){
   const[search,setSearch]=useState('')
  //  const[data,setData]=useState(data1)
   const [emoji , setEmoji] = useState([])

   async function CallApi(){
      const response = await fetch('https://emoji-api.com/emojis?access_key=c94ceaa71bcedadda51c342271d162e4ab5d5a54')
      const data = await response.json()
      setEmoji(data)
      console.log(data[0])
    }
    console.log(emoji[0])

  //    function deleteButton(index){
  //   const newData1=data.filter((element)=>element!==data1[index])
  //   console.log(newData1)
  //    setData([...newData1])

  // }

  //  useEffect(()=>{
  //   const newData=data1.filter((emoji)=>emoji.Title.toLowerCase().includes(search.toLowerCase()))
  //   console.log(newData)
  //   setData(newData)
  //   },[search])
   
//     function handleClick(){
//    alert(' Are you sure DeletEmoji😎🤣😣😥🧡')
//  }
    
    return(
      <div className={style.container2}>
       
        <div className={style.mainContainer}>
        
         <div className={style.menu}> 

            <p className={style.heading}>🐨EmojiSearch🐨</p>
            <p className={style.search}>A simple searchEmoji with react</p>
       
          
           <Input className={style.Input}  type='name' placeholder='Search' value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
       
            <div className={style.cardContainer}> 
            <div className={style.card}></div>
            {emoji.map(element => <p>Emoji: {element.character} 
                </p> )}
            
               <h1 onClick={CallApi}>Click me to call api</h1>
               </div>
               {/* <Button 
               onClick={()=>deleteButton(index)} Delete button/>  */}
           
               </div>
               </div>
              
              
            
           
         </div>
        
     
         
        
         
        
          
       
              
        
       
    )
}


// * {data.map((element,index)=>{return(
//   <div className={style.card}>
//       <p className={style.element} onClick={handleClick}>
//      {element.symbol} {element.Title} */}