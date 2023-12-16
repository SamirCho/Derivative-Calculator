let buttonNames=["no function","sin","cos","tan","exp","ln","b^","log_b"]
let buttonArray=[]
let b

class button{
    constructor(name){
        this.newButton=document.createElement("button")
        this.newButton.innerHTML=name
    }
    draw(){
        document.getElementById("buttonContainer").appendChild(this.newButton)
    }
}

for (let i = 0; i < buttonNames.length; i++) {
    buttonArray[i]=new button(buttonNames[i])
    buttonArray[i].draw()
}

buttonArray[0].newButton.addEventListener('click',noFXN)
buttonArray[1].newButton.addEventListener("click",sinFXN)
buttonArray[2].newButton.addEventListener("click",cosFXN)
buttonArray[3].newButton.addEventListener("click",tanFXN)
buttonArray[4].newButton.addEventListener("click",expFXN)
buttonArray[5].newButton.addEventListener("click",lnFXN)
buttonArray[6].newButton.addEventListener("click",bFXN)
buttonArray[7].newButton.addEventListener("click",logbFXN)

function noFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML=""
    document.getElementById("container").innerHTML=dy
}

function sinFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sin"
    document.getElementById("container").innerHTML="("+dy+")"+"cos("+y+")"
}

function cosFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="cos"
    document.getElementById("container").innerHTML="-("+dy+")"+"sin("+y+")"
}

function tanFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="tan"
    document.getElementById("container").innerHTML="("+dy+")"+"sec^2("+y+")"
}

function expFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="exp"
    document.getElementById("container").innerHTML="("+dy+")"+"exp("+y+")"
}

function lnFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="ln"
    document.getElementById("container").innerHTML="("+dy+")/("+y+")"
}

function bFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=parseFloat(prompt("Value of base?"))
    document.getElementById("operator").innerHTML=b+"^"
    document.getElementById("container").innerHTML="("+dy+")("+b+"^("+y+"))(ln("+b+"))"
}

function logbFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=parseFloat(prompt("Value of base?"))
}