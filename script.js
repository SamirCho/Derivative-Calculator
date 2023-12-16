let fxn=document.getElementById("fxn")
let buttons=["sqrt","sin","cos","tan","exp","ln"]

for (let i = 0; i < buttons.length; i++) {
    let newButton=document.createElement("button")
    newButton.innerHTML=buttons[i]
    document.getElementById("buttonContainer").appendChild(newButton)
}

document.addEventListener('keypress', function (e) {
    if (e.key=="Enter") {
        derivative(fxn.value)
    }
  })

function derivative(input){
    if(input=="x"){
        document.getElementById("container").innerHTML=1
        return 1
    }
    if(input=="-x"){
        document.getElementById("container").innerHTML=-1
        return -1
    }
    if(!isNaN(input)){
        document.getElementById("container").innerHTML=0
    }else{
        input=breakup(input)
        for (let i = 0; i < input.length; i++) {
            input[i]=evaluate(input[i])        
        }
        document.getElementById("container").innerHTML=cleanUp(input.join("+"))
        return document.getElementById("container").innerHTML=cleanUp(input.join("+"))
    }
}

function evaluate(input){
    if(!isNaN(input)){
        return 0
    }
    if(input=="x"){
        return 1
    }
    if(input=="-x"){
        return -1
    }
    if(input.split("^").length==1){
        input=input.split("x")
        return input[0]
    }else{
        return powerRule(input)
    }
}

function powerRule(input){
    input=input.split("x^")
    if(input[0]==''){
        input[0]=1
    }
    input[0]*=input[1]
    input[1]-=1
    return input.join("x^")
}

function cleanUp(input){
    input=input.split("+")
    for (let i = 0; i < input.length; i++) {
        if(input[i]==0){
            input.splice(i,1)        
        }
    }
    input=input.join("+")
    input=input.split("")
    for (let i = 0; i < input.length; i++) {
        if(input[i]=="^"&&input[i+1]=="1"){
            input.splice(i,2)
        }
        if(input[i]=="1x"){
            input[i]=="x"
        }
        if(input[i]=="-1x"){
            input[i]=="-x"
        }
        if(input[i]=="+"&&input[i+1]=="-"){
            input[i]=" - "
            input.splice(i+1,1)
        }
        if(input[i]=="+"){
            input[i]=" + "
        }
        if(input[i]=="-"){
            input[i]=" - "
        }
    }
    return input.join("")
}

function breakup(input){
    let array=[]
    let a=0
    let b
    input=input.split("")
    for (let i = 0; i < input.length; i++) {
        if(input[i]=="+"){
            a++
        }
        else if(input[i]=="-"){
            a++
            array[a]+=input[i]
        }else{
            array[a]+=input[i]
        }
    }
    array=array.filter(function (element) {
        return element !== " ";
    })
    for (let i = 0; i < array.length; i++) {
        b=array[i].split("d")
        array[i]=b[2]
    }
    console.log(array)
    return array
}