'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'horray! correct number🎉🎊' );
// console.log(document.querySelector('.guess').value = 20);

let secnumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'please enter number'
    }
    else if( guess === secnumber){
     document.querySelector('.message').textContent = 'horray! correct number';
     document.querySelector('.number').textContent = secnumber;
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     if ( score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;}}
    else if(secnumber - guess >= 5 ){
        if ( score > 1){
        document.querySelector('.message').textContent = 'guese is too low '
        score -- ; 
        document.querySelector('.score').
        textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = ' game over';
        }
       }
       else if( guess - secnumber >= 5){
        if(score > 1){
        document.querySelector('.message').textContent = ' guess is too high '
        score --; 
        document.querySelector('.score').textContent = score}
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = ' game over';
        }
       }
       else if( secnumber - guess < 5 && secnumber - guess > 0 ){
        if(score > 1){
           document.querySelector('.message').textContent = 'guese is  low '
           score --; 
           document.querySelector('.score').textContent = score;}
           else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = ' game over';
           }
          }
        else if(guess - secnumber < 5 && guess - secnumber > 0){
            if(score > 1){
           document.querySelector('.message').textContent = ' guess is  high '
           score --; 
           document.querySelector('.score').textContent = score;}
           else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = ' game over';
           }
          }
});
document.querySelector('.again').addEventListener('click',function
(){
     score = 20;
     secnumber = (Math.trunc(Math.random() * 20) + 1);
     document.querySelector('.guess').value ='';
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('body').style.backgroundColor = '#222'

})
