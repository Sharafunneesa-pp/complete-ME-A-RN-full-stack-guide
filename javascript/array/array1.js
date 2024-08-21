// array - to store more than 1 value in a variable
// linear data structure
// array size is not fixed
// can hold different types of data
// to fetch item from array -use its index and it start from zero
// var array-name=[item1,item2,......itemn]

// variable creation
var collection= 10


// array creation
var car=["benz","bmw","audi"]

console.log(typeof(car));


// to fetch item from array- use its index
console.log(car[0])

// to get length
console.log(car.length)
console.log(car[car.length-1])

// to length of the array
console.log(car.length)


// insert an item to existing array
car.push("tvs")
console.log(car)
car[car.length]="porche"
console.log(car)


// to display array 
// to get values stored in array
for(let item of car)
{
    console.log(item)
  
}




// to display index
for(let index in car)
{
    console.log(index)

}

// to get index of array

for(let index in car)
{
    console.log(car[index])

}
// using normal for loop
for(i=0;i<car.length;i++)
{
    console.log(car[i])
}


