var x = parseFloat(Math.random()); 
var y = parseFloat(Math.random()); 

x*= 6;
y*= 6; 
x = Math.floor(x); 
y = Math.floor(y); 
x+= 1;
y+= 1;  


function play () { 

    var z = document.querySelector(".input1").value;
    var c = document.querySelector(".input2").value;  

    document.querySelector(".p1").innerHTML = z; 
    document.querySelector(".p2").innerHTML = c; 

    document.querySelector(".players").style.visibility = "visible";
}


function operate () { 

    switch (x) {
        case 1: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice1.png");
        break;
        case 2: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice2.png");
        break;
        case 3: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice3.png");
        break;
        case 4: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice4.png");
        break;
        case 5: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice5.png");
        break;
        case 6: 
        document.querySelector(".diceepic1").setAttribute("src", "Images/dice6.png");
        default: 
        break; 
    }
    
    switch (y) {
        case 1: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice1.png");
        break;
        case 2: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice2.png");
        break;
        case 3: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice3.png");
        break;
        case 4: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice4.png");
        break;
        case 5: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice5.png");
        break;
        case 6: 
        document.querySelector(".diceepic2").setAttribute("src", "Images/dice6.png");
        default: 
        break; 
    }
    
    
}


function winner () { 

    if (x > y) { 
        var t = document.querySelector(".input1").value;
        document.querySelector(".winner").innerHTML = t; 
    }
    else if (x < y) { 
        var u = document.querySelector(".input2").value;
        document.querySelector(".winner").innerHTML = u; 
    }
    else {
        document.querySelector(".topic").innerHTML = "Draw"; 
    }
}
