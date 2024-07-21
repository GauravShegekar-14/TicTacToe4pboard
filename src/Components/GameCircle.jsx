import React from 'react'
import "../Game.css"



const GameCircle = ({id, children,onCircleClicked, className}) => {

  const onclick = (ev,id)=>{
    onCircleClicked(id);
   }

  return (
    <div className={`gamecircle  ${className}`} onClick={(ev)=>onclick(ev,id)}>
        {children}
    </div>
    
  )
}

export default GameCircle;
