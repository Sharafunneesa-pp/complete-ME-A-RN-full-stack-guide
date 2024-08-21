// spread operator ...
// already this argument is considered as an array
function sum(...arg)
{
return arg.reduce((n1,n2)=>n1+n2)
}
console.log(sum(10,20,30))
//  largest number find

function large(...arg)
{
    return arg.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(large(20,30))
