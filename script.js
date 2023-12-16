let fxn=document.getElementById("fxn")
let buttons=["sqrt","sin","cos","tan","ln","exp"]

document.addEventListener('keypress', function (e) {
    if (e.key=="Enter") {
        derivative(fxn.value)
    }
  })

function derivative(input){
    if(!isNaN(input)){
        document.getElementById("container").innerHTML=0
    }else{
        input=breakup(input)
        for (let i = 0; i < input.length; i++) {
            input[i]=evaluate(input[i])        
        }
        document.getElementById("container").innerHTML=cleanUp(input.join("+"))
    }
}

function evaluate(input){
    if(input=="x"){
        return 1
    }
    if(input=="-x"){
        return -1
    }
    if(!isNaN(input)){
        return 0
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