import React,{useEffect, useState} from 'react'
import GameCircle from './GameCircle';
import "../Game.css"
import Header from './Header';
import Footer from './Footer';
import { isWinner,isDraw,getComputermove} from '../Helper'
import {GAME_STATE_PLAYING,
       NO_PLAYER,PLAYER_1,PLAYER_2,
       NO_CIRCLE,
       GAME_STATE_WIN,
       GAME_STATE_DRAW} from "./constants"



 const Gameboard = () => {


  const [gameboard,setGameboard] = useState(Array(NO_CIRCLE).fill(NO_PLAYER));
  const [currentPlayer,setCurrentplayer] = useState(PLAYER_1)
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING)
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
  // console.log(gameboard);

useEffect(()=>{
  initGame();
},[])

const initGame = () =>{
  console.log('init game');
  setGameboard(Array(NO_CIRCLE).fill(NO_PLAYER));
  setCurrentplayer(PLAYER_1)
  setGameState(GAME_STATE_PLAYING);
}

  const initialBoard = () =>{
    const circles = [];
    for(let i = 0; i < NO_CIRCLE; i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }
 
 const suggestMove =()=>{
  circleClicked(getComputermove(gameboard));
  console.log("suggestMove");
 }


const circleClicked =(id)=>{
  console.log('circle clicked:'+id);

  if(gameboard[id] !== NO_PLAYER)return;

  if(gameState !== GAME_STATE_PLAYING)return;

  if(isWinner(gameboard,id,currentPlayer)){
    setGameState(GAME_STATE_WIN)
    setWinPlayer(currentPlayer)
  }

  if(isDraw(gameboard,id,currentPlayer)){
    setGameState(GAME_STATE_DRAW)
    setWinPlayer(NO_PLAYER)
  }

  const board = [...gameboard];
  board[id] = currentPlayer;
  setGameboard(board);

  setGameboard(prev => {
    return prev.map((circle,pos)=>{
      if(pos ==id) return currentPlayer;
      return circle;
    })
  })

  

  setCurrentplayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)

  console.log(gameboard);
  console.log(currentPlayer);
} 


const renderCircle = id =>{
 return <GameCircle key={id} id = {id} className={`player_${gameboard[id]}`} onCircleClicked={circleClicked}></GameCircle>

}
  return (
    <>
    <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>

    <div className='gameboard' >
      {initialBoard()};  
    </div>
    <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
    </>
  )
}

export default Gameboard;