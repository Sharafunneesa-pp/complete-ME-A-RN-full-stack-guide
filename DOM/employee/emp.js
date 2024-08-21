function addEmp()
{
    // employee object creating it should be key value pair
    employee={
        id:empid.value,
        eName:empName.value,
        addr:empAddr.value,
        desg:empDesg.value,
        exp:empExp.value,
        salary:empSalary.value
    }
    // stringify is used to convert the type of data into string type.here employee type should be converted into string
    // both parameters should be in string while sending data to server 
    // json is a key value pair,
    //  object employee should be converted into string
    // json is javascript object notation
// localStorage.setItem(employee.id,JSON.stringify(employee))
// alert("Employee details stored successfully")
// HERE we are storing in local storage using its id and corresponding details in a key value pair
// employee is the object and id is the key
// first parameter is the key ,secondly should give corresponding entire details its n employee but we have 
// to convert it into string so simplify can be used for that
if(employee.id in localStorage)
// checking whether the same id exist in local storage
{
    alert("Already employee details are existing")
}
else{
    localStorage.setItem(employee.id,JSON.stringify(employee))
    alert("Employee details added successfully")
}
}


function searchId()
{
    key=searchKey.value
    if(key in localStorage)
    {

        employee=JSON.parse(localStorage.getItem(key))
        output.innerHTML =` <p> Employee id : ${employee.id} </p>
         <p> Employee Name : ${employee.eName} </p>
         <p> Employee Address : ${employee.addr} </p>
         <p> Employee Designation : ${employee.desg} </p>
         <p> Employee Experience : ${employee.exp} </p>
         <p> Employee Salary : ${employee.salary} </p>`
    }
    else{
        output.innerHTML=""
        alert("NOT FOUND")
    }
}