let fxn=document.getElementById("fxn")
let decArray=[]

function derivative(input){
    if(input==0){
        return 0
    }
    if(input=="x^0"){
        input="1"
        return 0
    }
    if(input=="x"||input=="x^1"){
        input=="x"
        return 1
    }
    if(input=="-x"||input=="-x^1"){
        input="-x"
        return -1
    }
    if(!isNaN(input)){
        return 0
    }else{
        input=breakup(input)
        for (let i = 0; i < input.length; i++) {
            decArray[i]=decEval(input[i])
        }
        for (let i = 0; i < input.length; i++) {
            input[i]=evaluate(input[i])
        }
        return input.join("+")
    }
}

function breakup(input){
    input=removeSpaces(input)
    let array=[]
    let a=0
    let c
    input=input.split("")
    for (let i = 0; i < input.length; i++) {
        if(input[i]=="^"&&input[i+1]=="-"){
            array[a]+=input[i]+input[i+1]
            i++
        }else if(input[i]=="+"){
            a++
        }
        else if(input[i]=="-"){
            a++
            array[a]+=input[i]
        }else{
            array[a]+=input[i]
        }
    }
    array=array.filter(deleteEmptyItems)
    for (let i = 0; i < array.length; i++) {
        c=array[i].split("d")
        array[i]=c[2]
    }
    for (let i = 0; i < array.length; i++) {
        array[i]=removeSpaces(array[i])
    }
    for (let i = 0; i < array.length; i++) {
        array[i]=coef(array[i])
    }
    for (let i = 0; i < array.length; i++) {
        array[i]=parseFractions(array[i])
    }
    console.log(array)
    return array
}

function parseFractions(input){
    input=input.split("/")
    if(input.length==1){
        return input.toString()
    }else{
        input=input.join("/")
        if(input.split("x").length==1){
            return input
        }else{
            if(input.split("/")[1]=="x"){
                input=input.split("/")
                input[1]="x^1"
                input=input.join("/")
            }
            input=input.split("/")
            input=input.join("")
            input=input.split("^")
            input[1]*=-1
            return input.join("^")
        }
    }
}

function deleteEmptyItems(input){
    return input!=" "
}

function decEval(input){
    input=input.toString()
    input=input.split("x^")
    for (let i = 0; i < input.length; i++) {
        input[i]=decEvalPartTwoElectricBoogaloo(input[i])
    }
    return Math.max(...input)
}

function decEvalPartTwoElectricBoogaloo(input){
    input=input.split(".")
    if(input.length==2){
        return input[1].length
    }else{
        return 0
    }
}

function removeSpaces(input){
    input=input.split(" ")
    return input.join("")
}

function coef(input){
    input=input.split("x")
    if(input[0]=="-"){
        input[0]="-1"
    }
    return input.join("x")
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
    input[0]=eval(input[0])
    input[0]*=input[1]
    input[1]-=1
    decArray.push(decEval(input[0]),decEval(input[1]))
    input[0]=input[0].toFixed(Math.max(...decArray))
    input[1]=input[1].toFixed(Math.max(...decArray))
    return input.join("x^")
}

function cleanUp(input){
    input=input.toString()
    if(input==0){
        return 0
    }
    input=input.split("+")
    for (let i = 0; i < input.length; i++) {
        if(input[i]==0){
            input.splice(i,1)        
        }
    }
    input=input.join("+")
    input=input.split("")
    for (let j = 0; j < input.length; j+=0.5) {
        let i=Math.floor(j)
        if(input[i]=="-"&&input[i+1]=="("&&!isNaN(input[i+2])&&input[i+3]==")"&&input[i+4]=="/"){
            input[i]="-"+input[i+2]
            input.splice(i+1,3)
        }
        if(input[i]=="-"&&input[i+1]==" "&&isNaN(input[i+2])){
            input.splice(i+1,1)
        }
        if(input[i]=="-"&&input[i+1]=="("&&!isNaN(input[i+2])&&input[i+3]==")"&&isNaN(input[i+4])){
            input[i]="-"+input[i+2]
            input.splice(i+1,3)
        }
        if(input[i]=="["&&input[i+1]=="("&&input[i+2]=="x"&&input[i+3]==")"&&input[i+4]=="]"){
            input[i]=input[i+2]
            input.splice(i+1,4)
        }
        if(input[i]=="["&&input[i+1]=="("&&input[i+2]=="x"&&input[i+3]==")"&&input[i+4]=="^"&&input[i+5]==1&&input[i+6]=="]"){
            input[i]=input[i+2]
            input.splice(i+1,6)
        }
        if(input[i]=="^"&&input[i+1]=="1"&&input[i+2]!="."&&isNaN(input[i+2])){
            input.splice(i,2)
        }
        if(input[i]=="1x"){
            input[i]="x"
        }
        if(input[i]=="-1x"){
            input[i]="-x"
        }
        if(input[i]=="+"&&input[i+1]=="-"){
            input[i]=" - "
            input.splice(i+1,1)
        }
        if(input[i]=="+"){
            input[i]=" + "
        }
        if(input[i]=="-"&&input[i-1]!="^"){
            input[i]=" - "
        }
        if(input[i]=="x"&&input[i+1]=="^"&&input[i+2]=="0"&&input[i+3]!="."){
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
        if(input[i]=="("&&!isNaN(input[i+1])&&input[i+2]==")"){
            input[i]=input[i+1]
            input.splice(i+1,2)
        }
        if(input[i]=="("&&input[i+1]=="x"&&input[i+2]==")"&&input[i+3]=="/"){
            input[i]=input[i+1]
            input.splice(i+1,2)
        }
        if(input[i]=="-"&&input[i+1]==" "&&!isNaN(input[i+2])&&input[i+3]=="/"){
            input[i]="-"+input[i+2]
            input.splice(i+1,2)
        }
        if(input[i]=="-"&&input[i+1]=="1"&&isNaN(input[i+2])){
            input.splice(i+1,1)
        }
        if(input[i]=="-1"){
            input[i]="-"
        }
        if(input[i]==" - "&&isNaN(input[i+1])&&input[i+1]!="x"){
            input[i]="-"
        }
        if(input[i]=="-"&&input[i+1]=="/"){
            input[i]="-1"
        }
        if(input[i]=="-"&&input[i+1]=="0"&&input[i+2]!="."){
            return 0
        }
        if(input[i]=="-0"&&input[i+2]!="."){
            return 0
        }
        if(input[i]=="("&&input[i+1]=="x"&&input[i+2]==")"&&input[i+3]=="^"&&!isNaN(input[i+4])){
            input[i]="x^"+input[i+4]
            input.splice(i+1,4)
        }
        if(input[i]=="^"&&input[i+1]=="("&&input[i+2]=="x"&&input[i+3]==")"){
            input[i]="^x"
            input.splice(i+1,3)
        }
    }
    if(input[0]==" "&&input[1]==" - "&&input[2]==" "){
        input[0]="-"
        input.splice(1,2)
    }
    if(input[0]=="-"&&input[1]=="1"){
        input.splice(1,1)
    }
    console.log(input)
    return input.join("")
}