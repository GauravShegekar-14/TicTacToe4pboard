import React from 'react'
import{GAME_STATE_DRAW, GAME_STATE_PLAYING,
     GAME_STATE_WIN} from "./constants"
import { isDraw } from '../Helper'
     

const Header = ({gameState,currentPlayer, winPlayer}) => {
  const renderLabel = ()=>{
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>player {currentPlayer} Turn</div>
      case GAME_STATE_WIN:
        return <div>player {winPlayer} wins</div>
        case GAME_STATE_DRAW:
          return <div>Game is a Draw!</div>  
       default:
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}

export default Header