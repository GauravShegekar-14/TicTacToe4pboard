import React from 'react'
import {GAME_STATE_PLAYING} from "./constants"

const Footer = ({onNewGameClick,onSuggestClick,gameState}) => {
  
  const renderButton = () =>{

  return gameState === GAME_STATE_PLAYING ? <button onClick={onSuggestClick} >Suggest</button> :  <button onClick={onNewGameClick}>New Game</button>

  }
  return (
    <div className='panel footer'>
      { renderButton()}
    </div>
  )
}

export default Footer