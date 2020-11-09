var turn;

function reset(){
    location.reload(false);
}
function won(){
    if(turn == "X"){
        alert("Player O won");
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        alert("Player X won");
        document.getElementById("turn").innerHTML = "Player X won";
    }
}
function check(){
    if(document.getElementById(1.1).innerHTML != ""){
     if(document.getElementById(1.1).innerHTML === document.getElementById(1.2).innerHTML){
        if(document.getElementById(1.2).innerHTML === document.getElementById(1.3).innerHTML){
        document.getElementById('line4').style.display = 'block';
        if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(2.1).innerHTML != ""){
    if(document.getElementById(2.1).innerHTML === document.getElementById(2.2).innerHTML){
        if(document.getElementById(2.2).innerHTML === document.getElementById(2.3).innerHTML){
        document.getElementById('line5').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(3.1).innerHTML != ""){
    if(document.getElementById(3.1).innerHTML === document.getElementById(3.2).innerHTML){
        if(document.getElementById(3.2).innerHTML === document.getElementById(3.3).innerHTML){
        document.getElementById('line6').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(1.1).innerHTML != ""){
    if(document.getElementById(1.1).innerHTML === document.getElementById(2.1).innerHTML){
        if(document.getElementById(2.1).innerHTML === document.getElementById(3.1).innerHTML){
        document.getElementById('line1').style.display = 'block';
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(1.2).innerHTML != ""){
    if(document.getElementById(1.2).innerHTML === document.getElementById(2.2).innerHTML){
        if(document.getElementById(2.2).innerHTML === document.getElementById(3.2).innerHTML){
        document.getElementById('line2').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(1.3).innerHTML != ""){
    if(document.getElementById(1.3).innerHTML === document.getElementById(2.3).innerHTML){
        if(document.getElementById(2.3).innerHTML === document.getElementById(3.3).innerHTML){
        document.getElementById('line3').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(1.1).innerHTML != ""){
    if(document.getElementById(1.1).innerHTML === document.getElementById(2.2).innerHTML){
        if(document.getElementById(2.2).innerHTML === document.getElementById(3.3).innerHTML){
        document.getElementById('line7').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
    if(document.getElementById(3.1).innerHTML != ""){
    if(document.getElementById(3.1).innerHTML === document.getElementById(2.2).innerHTML){
        if(document.getElementById(2.2).innerHTML === document.getElementById(1.3).innerHTML){
        document.getElementById('line8').style.display = 'block';
         if(turn == "X"){
        document.getElementById("turn").innerHTML = "Player O won";
    }
    else if(turn == "O"){
        document.getElementById("turn").innerHTML = "Player X won";
    }
        setTimeout(won,100);
    }
    }
    }
}

function place(id){
    if(turn == "X" || turn == "O"){
        document.getElementById(id).innerHTML = turn;
        if(turn == "X"){
            document.getElementById("turn").innerHTML = "O Turn";
            turn = "O";
        }
        else if(turn == "O"){
            document.getElementById("turn").innerHTML = "X Turn";
            turn = "X";
        } 
    }   
    else{
        alert("Press Start Button to start the Game")
    }
    check();
}



function start(){
    document.getElementById("turn").style.display = "block";
    document.getElementById("turn").innerHTML = "X Turn";
    document.getElementById("start").style.display = "none";
    turn = "X";
}





