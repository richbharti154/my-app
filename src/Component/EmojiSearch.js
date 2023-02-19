import React from 'react'
import style from './EmojiSearch.module.css'

export default function EmojiSearch(){
   
    return(
        <div className={style.EmojiSearch}>
        <div className={style.menu}>
            <div className={style.menutext}>
            <h1 className={style.heading}>EmojiSearch</h1>
            <p className={style.search}>A simple searchEmoji with react</p>
           <input className={style.input}  type='Sticker' placeholder='EmojiName'/>
           </div>
        </div>
        <div classNmae={style.container}>
      <div className={style.card}>
      <Data/>
            </div>
        </div>
        <p></p>

        </div>
       
    )
}