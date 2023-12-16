let fxn=document.getElementById("fxn")
let container=document.getElementById("container")

document.addEventListener('keypress', function (e) {
    if (e.key=="Enter") {
        derivative(fxn.value)
    }
  })

function derivative(input){
    if(!isNaN(input)){
        container.innerHTML=0
    }else{
        input=breakup(input)
        for (let i = 0; i < input.length; i++) {
            input[i]=evaluate(input[i])        
        }
        container.innerHTML=eval(cleanUp(input.join("+")))
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
    input=input.split("x")
    return input[0]
}

function cleanUp(input){
    input=input.split("+")
    for (let i = 0; i < input.length; i++) {
        if(input[i]==0){
            input.splice(i,1)        
        }
    }
    return input.join("+")
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
    return array
}

breakup("-x-5+2x-99-22x")