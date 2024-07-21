export const isWinner =(gameboard, currentMove,currentPlayer) => {

   let board = [...gameboard]
   board[currentMove] = currentPlayer;

   const winLines=[
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]

   ];

   for(let i=0; i< winLines.length;i++){
    const [c1,c2,c3,c4] = winLines[i];

    if(board[c1] > 0 &&
        board[c1] === board[c2] && 
        board[c2] === board[c3] &&
        board[c3] === board[c4]
     ){
        return true
     }
   }
   return false;
}

export const isDraw = (gameboard,currentMove,currentPlayer) =>{
   let board = [...gameboard]
   board[currentMove] = currentPlayer;

   let count = board.reduce((n,x) => n+(x===0),0);
      console.log(`count ${count}`);
      return count === 0;
   
}

 const getRandomComputermove = (gameboard) =>{
    let validMoves = [];
    for(let i=0;i< gameboard.length;i++){
      if(gameboard[i] ===0){
         validMoves.push(i);
      }
    }
    let rndMove = Math.floor(Math.random() * validMoves.length)
    return validMoves[rndMove];
}
const getPosition = (gameboard,moveCheck)=>{
   for(let check=0; check < moveCheck.length; check++){
      for(let i=0; i < moveCheck[check].max; i+=moveCheck[check].step){
        let series = gameboard[i+ moveCheck[check].indexex[0]].toString() +
        gameboard[i+ moveCheck[check].indexex[1]].toString() +
        gameboard[i+ moveCheck[check].indexex[2]].toString() +
        gameboard[i+ moveCheck[check].indexex[3]].toString() 

        switch(series){
         case "1110":
         case "2220":
           return i+ moveCheck[check].indexex[3];

         case "1101":
         case "2202": 
            return i+ moveCheck[check].indexex[2];   

         case "1011":
         case "2022": 
             return i+ moveCheck[check].indexex[1];   

         case "0111":
         case "0222": 
            return i+ moveCheck[check].indexex[0];
         default:
        }
      }
   }
   return 1;
}

export const getComputermove = (gameboard)=>{
   let moveCheck = [
      {
         indexex:[0,4,8,12],
         max:4,
         step:1
      },
      {
         indexex:[0,1,2,3],
         max:16,
         step:4
      },
      {
         indexex:[0,5,10,15],
         max:16,
         step:16
      },
      {
         indexex:[3,6,9,12],
         max:16,
         step:16
      },
   ]
  let position = getPosition(gameboard,moveCheck);
  if(position > 1) return position;

  return getRandomComputermove(gameboard)

}