var sr=[];

const button2= document.getElementById("button2");
button2.addEventListener("click", function() {
    // This function will be executed when the button is clicked and reset
    document.querySelector("h1").textContent = "Press the button";
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
    document.getElementById("score1").textContent=0;
    document.getElementById("score2").textContent=0;
    finelScorePlayer1=0;
    finelScorePlayer2=0;

}); 
finelScorePlayer1=0;
finelScorePlayer2=0;
const button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    
    if(finelScorePlayer1 < 10 && finelScorePlayer2 <10){
    // This function will be executed when the button is clicked
    let i = 0;

    function performRandomCubes() {
        if (i < 5) {
            randomCube();
            i++;
        } else {
            winner(sr[0],sr[1]);
           

            clearInterval(interval);
        }
    }

    
    const interval = setInterval(performRandomCubes, 70);

    }
    
});




function randomCube(){

var randomNumber1, randomNumber2;

randomNumber1 = Math.floor(Math.random(randomNumber1)*6 + 1);

randomNumber2 = Math.floor(Math.random(randomNumber2)*6 + 1);

if (randomNumber1===1 ){
document.querySelectorAll("img")[0].setAttribute("src","./images/dice1.png");
}

else if (randomNumber1===2){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png");

}

else if (randomNumber1===3){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice3.png");
    
}
else if (randomNumber1===4){
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice4.png");
    
}

else if (randomNumber1===5){

    document.querySelectorAll("img")[0].setAttribute("src","./images/dice5.png");
}

else{
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png");
}

if (randomNumber2===1 ){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png");
    }
    
    else if (randomNumber2===2){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice2.png");
    
    }
    
    else if (randomNumber2===3){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png");
        
    }
    else if (randomNumber2===4){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png");
        
    }
    
    else if (randomNumber2===5){
    
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png");
    }
    
    else{
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
    }
    
    sr=[randomNumber1,randomNumber2];

}

function winner(one, two){
   
    if(one===two){
        document.querySelector("h1").textContent = "🚩Draw!🚩";
        
    }
    
    else if(one>two){
      
        if(finelScorePlayer1 < 10 && finelScorePlayer2 <10){
        document.querySelector("h1").textContent = "🚩Player 1 Wins The Round! ";
        finelScorePlayer1++;
        document.getElementById("score1").textContent=finelScorePlayer1;
        
        
        }

        
    }

    else if (one<two){
      
        
        if(finelScorePlayer1 <10 && finelScorePlayer2 <10){
        document.querySelector("h1").textContent = "Player 2 Wins The Round!🚩";
        finelScorePlayer2++;
        document.getElementById("score2").textContent=finelScorePlayer2;
        
        
        }
    }


    if(finelScorePlayer1 === 10 ){
        document.querySelector("h1").textContent = "🚩Player 1 Wins The Game!🏆";
        document.querySelector("footer").style.marginBottom="100px";

    }

    if(finelScorePlayer2 === 10){
        document.querySelector("h1").textContent = "Player 2 Wins The Game!🚩🏆";
        document.querySelector("footer").style.marginBottom="100px";

    }

    


}



