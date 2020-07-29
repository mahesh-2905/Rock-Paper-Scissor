let User_score = 0;
let Computer_score = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function userchoice(user_choice){
    if(user_choice === "r"){
        return "Rock";
    }
    else if(user_choice === "p"){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}
function computerchoice(computer_choice){
    if(computer_choice === "r"){
        return "Rock";
    }
    else if(computer_choice === "p"){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}


function Won(userChoice,computer_choice){
    User_score++;
    userscore_span.innerHTML = User_score;
    let c = computerchoice(computer_choice);
    let u = userchoice(userChoice);  
    let user_smallname = "(user)".fontsize(3).sub();  
    let computer_smallname = "(computer)".fontsize(3).sub(); 
    result_p.innerHTML = u +(user_smallname)+ " Beats the " + c +computer_smallname + " . You " + "Won.....!";
    document.getElementById(userChoice).classList.add('greenglow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},300);
}

function Lost(userChoice,computer_choice){
    Computer_score++;
    computerscore_span.innerHTML = Computer_score;
    let c = computerchoice(computer_choice);
    let u = userchoice(userChoice);
    let user_smallname = "(user)".fontsize(3).sub();  
    let computer_smallname = "(computer)".fontsize(3).sub(); 
    result_p.innerHTML = c+computer_smallname + " Beats the " + u +user_smallname+ " . You " + "Lost.....!";
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},300);
}
 function Draw(userChoice,computer_choice){
    let c = computerchoice(computer_choice);
    let u = userchoice(userChoice);  
    let user_smallname = "(user)".fontsize(3).sub();  
    let computer_smallname = "(computer)".fontsize(3).sub(); 
    result_p.innerHTML = u +user_smallname+ " Equals " + c +computer_smallname + " It's a Draw..! ";
    document.getElementById(userChoice).classList.add('greyglow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greyglow')},300);
    
 }
function getcomputer_choice(){
    let computerchoice =['r','p','s'];
    let random =(Math.floor(Math.random()*3));
    return computerchoice[random];
}
getcomputer_choice();

function game(userChoice){
    let computer_choice = getcomputer_choice();
    switch (userChoice + computer_choice){
        case "pr":
        case "rs":
        case "sp":
             Won(userChoice, computer_choice);
        break;
        case "rp":
        case "sr":
        case "ps":
              Lost(userChoice, computer_choice);
        break;
        case "pp":
        case "rr":
        case "ss":
            Draw(userChoice, computer_choice);
        break;
    }


}


function main(){
rock_div.addEventListener('click',function(){
   game('r');
});
paper_div.addEventListener('click',function(){
    game('p');
});
scissor_div.addEventListener('click',function(){
    game('s');
});
}
main();