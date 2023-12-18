let b=document.getElementById("base").value
let n=document.getElementById("npower").value
let buttonNames=["no function","sqrt","cbrt","reciprocal","abs","^n","sin","cos","tan","csc","sec","cot","sinh","cosh","tanh","csch","sech","coth","exp","ln","b^","log_b"]
let buttonArray=[]
let y,dy

class Button{
    constructor(name){
        this.newButton=document.createElement("button")
        this.newButton.innerHTML=name
    }
    draw(){
        document.getElementById("buttonContainer").appendChild(this.newButton)
    }
}

for (let i = 0; i < buttonNames.length; i++) {
    buttonArray[i]=new Button(buttonNames[i])
    buttonArray[i].draw()
}

buttonArray[0].newButton.addEventListener('click',noFXN)
buttonArray[1].newButton.addEventListener('click',sqrtFXN)
buttonArray[2].newButton.addEventListener('click',cbrtFXN)
buttonArray[3].newButton.addEventListener('click',reciprocalFXN)
buttonArray[4].newButton.addEventListener("click",absFXN)
buttonArray[5].newButton.addEventListener('click',nFXN)
buttonArray[6].newButton.addEventListener("click",sinFXN)
buttonArray[7].newButton.addEventListener("click",cosFXN)
buttonArray[8].newButton.addEventListener("click",tanFXN)
buttonArray[9].newButton.addEventListener("click",cscFXN)
buttonArray[10].newButton.addEventListener("click",secFXN)
buttonArray[11].newButton.addEventListener("click",cotFXN)
buttonArray[12].newButton.addEventListener("click",sinhFXN)
buttonArray[13].newButton.addEventListener("click",coshFXN)
buttonArray[14].newButton.addEventListener("click",tanhFXN)
buttonArray[15].newButton.addEventListener("click",cschFXN)
buttonArray[16].newButton.addEventListener("click",sechFXN)
buttonArray[17].newButton.addEventListener("click",cothFXN)
buttonArray[18].newButton.addEventListener("click",expFXN)
buttonArray[19].newButton.addEventListener("click",lnFXN)
buttonArray[20].newButton.addEventListener("click",bFXN)
buttonArray[21].newButton.addEventListener("click",logbFXN)

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

function cbrtFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="cbrt["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")/"+"[3(cbrt("+y+"))^(2)]")
}

function reciprocalFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="["
    document.getElementById("bracket").innerHTML="]"
    document.getElementById("power").innerHTML="^(-1)]"
    if(!isNaN(y)){
        document.getElementById("container").innerHTML=0
    }else{
        document.getElementById("container").innerHTML=cleanUp("-("+dy+")/"+"[("+y+")^2]")
    }
}

function absFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="abs["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("[("+dy+")abs("+y+")]/("+y+")")
}

function nFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    n=document.getElementById("npower").value
    document.getElementById("operator").innerHTML="["
    document.getElementById("bracket").innerHTML="]"
    document.getElementById("power").innerHTML="^("+n+")]"
    n=document.getElementById("npower").value
    if(n==0){
        document.getElementById("container").innerHTML=0
    }else if(n==1){
        document.getElementById("container").innerHTML=cleanUp(dy)
    }else {
        document.getElementById("container").innerHTML=cleanUp("("+n+")"+"[("+y+")^"+(parseFloat(n)-1)+"]("+dy+")")
    }
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
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"[sec("+y+")]^2")
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
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")[csc("+y+")]^2")
}

function sinhFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sinh["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"cosh("+y+")")
}

function coshFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="cosh["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"sinh("+y+")")
}

function tanhFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="tanh["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("("+dy+")"+"[sech("+y+")]^2")
}

function cschFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="csch["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")csch("+y+")coth("+y+")")
}

function sechFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="sech["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")"+"sech("+y+")tanh("+y+")")
}

function cothFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    document.getElementById("operator").innerHTML="coth["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    document.getElementById("container").innerHTML=cleanUp("-("+dy+")[csch("+y+")]^2")
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
    if(y==0){
        document.getElementById("container").innerHTML="0"
    // }else if(!isNaN(dy)&&dy!=0){
    //     document.getElementById("container").innerHTML="1/x"
    }else{
        document.getElementById("container").innerHTML=cleanUp("("+dy+")/("+y+")")
    }
}

function bFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=document.getElementById("base").value
    document.getElementById("operator").innerHTML=b+"^["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    if(b==1){
        document.getElementById("container").innerHTML=0
    }else{
        document.getElementById("container").innerHTML=cleanUp("("+dy+")("+b+"^("+y+"))ln("+b+")")
    }
}

function logbFXN(){
    y=fxn.value
    dy=derivative(fxn.value)
    b=document.getElementById("base").value
    document.getElementById("operator").innerHTML="log_"+b+"["
    document.getElementById("bracket").innerHTML="]]"
    document.getElementById("power").innerHTML=""
    if(b==1||y==0){
        document.getElementById("container").innerHTML="0"
    }else if(!isNaN(dy)&&dy!=0){
        document.getElementById("container").innerHTML="1/[xln("+b+")]"
    }else{
        document.getElementById("container").innerHTML=cleanUp("("+dy+")/[("+y+")ln("+b+")]")
    }
}