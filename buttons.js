let buttonNames=["no function","sqrt","reciprocal","^n","sin","cos","tan","csc","sec","cot","exp","ln","b^","log_b"]
let buttonArray=[]
let b=2
let n=2
let y,dy

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
buttonArray[1].newButton.addEventListener('click',sqrtFXN)
buttonArray[2].newButton.addEventListener('click',reciprocalFXN)
buttonArray[3].newButton.addEventListener('click',nFXN)
buttonArray[4].newButton.addEventListener("click",sinFXN)
buttonArray[5].newButton.addEventListener("click",cosFXN)
buttonArray[6].newButton.addEventListener("click",tanFXN)
buttonArray[7].newButton.addEventListener("click",cscFXN)
buttonArray[8].newButton.addEventListener("click",secFXN)
buttonArray[9].newButton.addEventListener("click",cotFXN)
buttonArray[10].newButton.addEventListener("click",expFXN)
buttonArray[11].newButton.addEventListener("click",lnFXN)
buttonArray[12].newButton.addEventListener("click",bFXN)
buttonArray[13].newButton.addEventListener("click",logbFXN)

function noFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML=""
    document.getElementById("bracket").innerHTML="]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp(dy)
}

function sqrtFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sqrt["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")/"+"[2sqrt("+y+")]")
}

function reciprocalFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="["
    document.getElementById("bracket").innerHTML="]"
    document.getElementById("power").innerHTML="^(-1)]"
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")/"+"[("+y+")^2]")
}

function nFXN(){
    console.log(9)
}

function sinFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sin["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"cos("+y+")")
}

function cosFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="cos["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")"+"sin("+y+")")
}

function tanFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="tan["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"sec^2("+y+")")
}

function cscFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="csc["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")csc("+y+")cot("+y+")")
}

function secFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sec["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"sec("+y+")tan("+y+")")
}

function cotFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="cot["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")csc^2("+y+")")
}

function expFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="exp["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"exp("+y+")")
}

function lnFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="ln["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    if(!isNaN(dy)){
        document.getElementById("container").innerHTML="1/x"
    }else{
        document.getElementById("container").innerHTML=cleanUp("("+dy+")/("+y+")")
    }
}

function bFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=parseFloat(prompt("Value of base?"))
    if(isNaN(b)){
        b=2
    }
    document.getElementById("operator").innerHTML=b+"^["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")("+b+"^("+y+"))(ln("+b+"))")
}

function logbFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=parseFloat(prompt("Value of base?"))
    if(isNaN(b)){
        b=2
    }
    document.getElementById("operator").innerHTML="log_"+b+"["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp(`(${dy})/[(${y})(ln(${b})]`)
}