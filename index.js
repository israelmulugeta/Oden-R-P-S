let playerInput=prompt("rock,paper or scissor?");
playerInput=playerInput.toLowerCase();

console.log(playerInput);
function compInput(){
    let a = Math.floor(Math.random() * 10) ;
      if(a<=3){return 'rock'}
     else  if (a>3&&a<=6) {
        return 'paper'
        
      } else {
        return 'scissors'
      }
    
    }



let computerSelection =compInput();
