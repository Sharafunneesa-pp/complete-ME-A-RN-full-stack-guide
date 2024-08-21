// exception handling :try-catch block
console.log('exception handling')
exp = "%12+45-10*2"
try{
console.log('try block')
result = eval(exp)
}
catch{
    console.log("catch block")
    exp = "12+45-10*2"
    result = eval(exp)
}
finally{
    console.log("finally block")
    console.log(result)
    
}
    


console.log('after try-catch block')
// even catch is not executed,finally will work
