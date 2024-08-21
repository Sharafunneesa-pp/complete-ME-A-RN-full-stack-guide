// create new array from calling a function for every array element

a1=[10,11,12,13,14,15]
// print squares of all elements in an array



function square(num){
    return num**2

}
var sq=a.map(square)
console.log(sq)



console.log("----------------------------");

 
console.log(a1.map(num=>num**2))


// print cube of all elements
console.log(a1.map(num=>num**3))

console.log("----------------------------");



