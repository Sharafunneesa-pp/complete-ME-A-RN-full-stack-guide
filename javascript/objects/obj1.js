// objects - real world entity
// object creation -property -key-value pair
// var obj-name = {key:value}

var a = [10,20,30]
var a = { 0:10,1:20,2:30} 

// create object for employee with key as : id,name,designation,salary,experience

var employee = {
    id:1000,
    name:'max',
    desg:'developer',
    salary:35000,
    exp:3
}
//  to fetch values from objects: using key

// object-name["key-name"]  /object-name.key-name


// display name of the employee
console.log(employee.name)
console.log(employee["name"])

// dsp salary of employee

console.log(employee.salary)

// check whethr a key is present or not :using in operator
// "key-name" in object-name , returns a boolean

console.log("exp" in employee)
console.log("gender" in employee)


// to insert new key-value pir in an object
// object-name ["key -name"]=value


// insert  gender in to employee
employee["gender"]='male'
console.log(employee)

// insert isvaccinated:true in employee
employee.isVaccinated=true
console.log(employee)

// insert another prprty
employee.vaccination="covidshield"
console.log(employee)


// update key-value pair in object
// update employee vaccine as cowaxin
employee.vaccination="cowaxin"
console.log(employee)


employee.salary+=5000
console.log(employee)


// display all key value pairs in object- in operator
for(let key in employee)
{
    console.log(`${key} : ${employee[key]}`)
}

