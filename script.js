const p1={
    score: 0,
    btn: document.querySelector('#p1button'),
    display: document.querySelector('#display1')
    
}
const p2={
    score: 0,
    btn: document.querySelector('#p2button'),
    display: document.querySelector('#display2')
}

const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');
let winningScore=3;
let isGameover=false;

function updateScores(player,opponent){
    if(!isGameover){ 
        player.score+=1;
        if(player.score===winningScore){
           isGameover=true;
           player.btn.disabled=true;
           opponent.btn.disabled=true;
           player.display.classList.add('has-text-success');
           opponent.display.classList.add('has-text-danger');
        }
        player.display.textContent=player.score;
       }
}
p1.btn.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.btn.addEventListener('click',function(){
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(winningScoreSelect.value);
    reset();
})
resetButton.addEventListener('click',reset)
function reset(){
    isGameover=false;
    for(let p of [p1,p2] ){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.btn.disabled=false;
    }
}