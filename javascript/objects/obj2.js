// create an object for car (name,model,manufacture,price}

var car= {
    name:'polo',
    model:'hatchback',
    manufacture:'volksvagon',
    price:1300000


}
// 1.displ manufacture

// console.log(car.manufacture)

console.log(car['manufacture'])


// 2. check whether model present otherwise add model and display
if ('model' in car)
{
    console.log(car['model'])
}


// 3. add property varient
car['varient']=['TSI']
// console.log(car)

// 4.add more items to the varient key using push method
car['varient'].push('GT')
 console.log(car)

// 5. add color as new property and add more option to it
car['color']=['white','red','black']
 car['color'].push('blue')
console.log(car)

