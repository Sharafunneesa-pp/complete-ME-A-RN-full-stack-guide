employee=[
    [1001,'nisha','developer','kochi',25000,2],
    [1002,'max','tester','kozhikode',35000,1],
    [1003,'maxwell','developer','kochi',25000,4],
    [1004,'ashna','tester','kochi',45000,3],
    [1005,'sree','developer','calicut',25000,3],
    [1006,'anu','analyst','kochi',25000,3],
    [1007,'midhun','developer','tvm',35000,4],
    [1008,'thuva','analyst','tvm',25000,6],
    [1009,'sandra','developer','calicut',45000,3]

]


// min salary employye

console.log(employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2))
console.log("----------------------------");

console.log(employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2))

console.log("----------------------------");

console.log(employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2))

// total sal of all employee
console.log("----------------------------");

console.log(employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2))
console.log("----------------------------");

// 1.print all employee name
for(emp of employee)
{
    console.log(emp[1]);
}
console.log("----------------------------");
console.log(employee.map(emp=>emp[1]))
console.log("----------------------------");


// 2.print total number of employees

    console.log(employee.length);
    console.log("----------------------------");

//3. print developer employee details
for(let emp of employee)
{
    if(emp[2]=="developer")
    console.log(emp);
}







console.log(employee.filter(emp=>emp[2]=="developer"))
console.log("----------------------------");
console.log("----------------------------");

console.log("----------------------------");

// 4. print employee whose salary >30000
for(let emp of employee)
{
    if(emp[4]>30000)
    console.log(emp);
}
console.log("----------------------------");
// 5. print details of employee nisha
for(let emp of employee)
{
    if(emp[1]=="nisha")
    console.log(emp);
}



console.log("----------------------------");

console.log(employee.filter(item=>item[1]=="nisha"))
console.log("----------------------------");
console.log(employee.find(item=>item[1]=="nisha"))
console.log("----------------------------");




// 6.sort employee based on salay in desc order
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee)
console.log("----------------------------");
// 7.sort employee based on thier exprnce
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee)
console.log("----------------------------");


