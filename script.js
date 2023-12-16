let fxn=document.getElementById("fxn")

function derivative(input){
    if(input=="x^0"){
        input="1"
        return 0
    }
    input=cleanUp(input)
    if(input=="x"||input=="x^1"){
        input=="x"
        return 1
    }
    if(input=="-x"||input=="x^1"){
        input="-x"
        return -1
    }
    if(!isNaN(input)){
        return 0
    }else{
        input=breakup(input)
        for (let i = 0; i < input.length; i++) {
            input[i]=evaluate(input[i])        
        }
        return document.getElementById("container").innerHTML=cleanUp(input.join("+"))
    }
}

function breakup(input){
    let array=[]
    let a=0
    let c
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
    array=array.filter(function(element){
        return element!==" ";
    })
    for (let i = 0; i < array.length; i++) {
        c=array[i].split("d")
        array[i]=c[2]
    }
    for (let i = 0; i < array.length; i++) {
        array[i]=removeSpaces(array[i])
    }
    console.log(array)
    return array
}

function removeSpaces(input){
    input=input.split(" ")
    return input.join("")
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
        if(input[1]==""||input[1]==" "){
            return input[0]
        }else if(input[0]==""||input[0]==" "){
            return input[1]
        }
    }else{
        return powerRule(input)
    }
}

function powerRule(input){
    input=input.split("x^")
    if(input[0]==""){
        input[0]=1
    }
    input[0]*=input[1]
    input[1]-=1
    return input.join("x^")
}

function cleanUp(input){
    input=input.toString()
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
        if(input[i]=="x"&&input[i+1]=="^"&&input[i+2]=="0"){
            input[i]="("
            input[i+1]="1"
            input[i+2]=")"
        }
        if(input[i]=="("&&input[i+1]=="0"&&input[i+2]==")"){
            return 0
        }
        if(input[i]=="("&&input[i+1]=="1"&&input[i+2]==")"&&input[i+3]!="/"){
            input.splice(i,3)
        }
    }
    return input.join("")
}
