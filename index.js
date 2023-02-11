//how im gonna keep score
let userWins=0;
let compWins=0;


for(let i=0;i<5;i++){
    let playerInput=prompt("rock,paper or scissor?");
     playerInput=playerInput.toLowerCase();

    function compInput()
    {
       let a = Math.floor(Math.random() * 10) ;
         if(a<=3){return 'rock'}
          else  if (a>3&&a<=6) {
          return 'paper'}

         else {
        return 'scissors'}
    
    }



     let computerSelection =compInput();



    console.log(`player picks ${playerInput}`)
    console.log(`computer picks ${computerSelection}`)

//how im gonna comapre them



//Incase of a draw check for that first
     if(playerInput==computerSelection)
     {
        console.log('draw');
     }

    //the possible ways the computer can win
     if(computerSelection=='rock' && playerInput=='scissors')
    {
       compWins++
      console.log('computer wins round')
    }
    else if(computerSelection=='paper' && playerInput=='rock')
    {
        compWins++
        console.log('computer wins round')
    }
    else if(computerSelection=='scissors' && playerInput=='paper')
    {
        compWins++
        console.log('computer wins round')
    }

    //the possible ways the user can win
    if(playerInput=='rock'&& computerSelection=='scissors')
    {
      userWins++
      console.log("player wins round")
    }
    else if(playerInput=='paper'&& computerSelection=='rock')
    {
       userWins++
       console.log("player wins round")
    }
    else if(playerInput=='scissors'&& computerSelection=='paper')
    {
       userWins++
       console.log("player wins round")
    }

    console.log(`player score -${userWins}`);
    console.log(`computer score -${compWins}`);


    
}

if (userWins>compWins)
{console.log(`congrats!!!! you win`)}
if(userWins<compWins)
{
    console.log(`you lost ! try again by reloading browser.`)
}
else{
    console.log("you drew reload browser and try again")
}