function calfunc(num1:number , operator:string , num2:number ){
    if(operator === "+"){
     return num1 + num2
    }
    else if(operator === "-"){
     return num1 - num2
    }
    else if(operator === "*"){
     return num1 * num2
    }
    else if(operator === "/"){
     return num1 / num2
    }
    else{
     return "Please enter valid operator"
    }
 }
 
 
 
 export {calfunc}