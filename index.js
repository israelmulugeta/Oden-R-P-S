let compchoice=document.querySelector('.compChoice');
let hinject=document.querySelector('.hScoreInject');
if(hinject==null){console.log(null)};
let cinject=document.querySelector('.CscoreInject');
let compWins=0;
let userWins=0;
function compInput()
    {
       let a = Math.floor(Math.random() * 10) ;
         if(a<=3){return 'rock'}
          else  if (a>3&&a<=6) {
          return 'paper'}

         else {
        return 'scissors'}
    
    };

function compare(player)
{
    playerInput=player;
    computerSelection=compInput();
    compchoice.innerHTML= 'ill go with '+computerSelection;
    if(computerSelection=='rock' && playerInput=='scissors')
    {
       compWins++;
       cinject.innerHTML="comp :- "+compWins;

    }
    else if(computerSelection=='paper' && playerInput=='rock')
    {
        compWins++;
        cinject.innerHTML="comp :- "+compWins;;
    }
    else if(computerSelection=='scissors' && playerInput=='paper')
    {
        compWins++;
        cinject.innerHTML="comp :- "+compWins;;
    }

    //the possible ways the user can win
    if(playerInput=='rock'&& computerSelection=='scissors')
    {
      userWins++;
      hinject.innerHTML='human :-'+ userWins;
    }
    else if(playerInput=='paper'&& computerSelection=='rock')
    {
       userWins++;
       hinject.innerHTML='human :-'+ userWins;
    }
    else if(playerInput=='scissors'&& computerSelection=='paper')
    {
       userWins++;
       hinject.innerHTML='human :-'+ userWins;
    }
}    

//let bt1=document.querySelector('.rock');
//let bt2=document.querySelector('.paper');
//let bt3=document.querySelector('.scissors');

//bt1.addEventListener('click',bta);
//bt2.addEventListener('click',btb);
//bt3.addEventListener('click',btc);


//function bta(){compare(bt1.classList)};
//function btb(){compare(bt2.classList)};
//function btc(){compare(bt3.classList)};

let finalscore=document.querySelector(".finalScore");
function activator(value){
value.addEventListener('click',e =>{ 
    if(userWins>4&&userWins>compWins)
    {
        finalscore.innerHTML="YOU WIN CONGRATES";
    } 
    else if(compWins>4&&compWins>userWins){
        finalscore.innerHTML="you lose sucker!!!"
    }else
     compare(e.target.classList)
    });
}
let buttons=document.querySelectorAll('button');
buttons.forEach(button => {
     activator(button) 
});

