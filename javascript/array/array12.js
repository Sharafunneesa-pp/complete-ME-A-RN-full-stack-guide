// reduce() - it will apply a function to all array element and return a single value
// highest value,lowest value,minimum,max,total sum
a=[1,2,3,4,5,6,7]


//find  total sum of values
console.log(a.reduce((num1,num2)=>num1+num2))


// find smallest number
console.log(a.reduce((num1,num2)=>num1<num2?num1:num2))

// find largest
console.log(a.reduce((num1,num2)=>num1>num2?num1:num2))



