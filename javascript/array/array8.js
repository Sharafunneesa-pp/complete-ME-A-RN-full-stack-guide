// filter()-create a new array with elements satisfy with condition by a function



// 
a=[10,11,12,13,14,15]
// print even Number
// for(let num of a)
// if(num %2==0)
// {
//     console.log(num)
// }






// function numCheck(num)
// {
//     return num%2==0?"even":"odd"
    

// }


// filter function
// num=>num%2==0
evens =a.filter(num=>num%2==0)
console.log(evens);



// print all numbers greater than 12 from the array
console.log(a.filter(num=>num>12))




// map function: create new array from calling a function for every array elent 
a=[10,11,12,13,14,15]
// print square all ement

// function square(num)
// {
//     return num**2
// }
// var squares =a.map(square)
// console.log(square)
console.log("----------------------------")

console.log(a.map(num=>num**2))
console.log("----------------------------")






// create new array if number greater than 5 then increment number else decrement number
a1=[1,2,3,4,5,6,7]
console.log(a1.map(num=>num>5?num+1:num-1))




