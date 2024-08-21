// object oriented programming-oop

// 1. class : blueprint, eg:car ,tv
// 2.objects- real world entity, eg:mi,lg
// 3.reference - eg:remote(linking class)
// class
// syntax:class class-name{properties,function}

// without class, objects can create in javascript

// create employee class with properties(id,name,age,salary,designation)
// function(setEmployee(),printEmployee())

class employee{
setEmployee(id,name,age,gender,salary,desg)
{
    this.id=id,
    this.name=name,
    this.age=age,
    this.gender=gender,
    this.salary=salary,
    this.desg=desg

}
printEmployee()
{
    console.log(this.id,this.name,this.age,this.gender,this.salary,this.desg)
}

}
// object creation
// syntax: object name= new class nname()

emp=new employee()
emp.setEmployee(101,'nish','22','female',10000,'engineer')
emp.printEmployee()


