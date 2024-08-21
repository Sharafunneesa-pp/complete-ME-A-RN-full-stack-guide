// student class creation
class student{
// instance initialisation : constructor()- used to initialise instance its default
    constructor(roll,name,course,total)
    {
        this.roll=roll,
        this.name=name,
        this.course=course,
        this.total=total
        
    
}
    printStudent()
    {
        console.log(this.roll,this.name,this.course,this.total)
    }
    
    }
// objects or instance
    stud=new student(101,'nish','mearn',500)
    stud.printStudent()
    stud1=new student(102,'ammu','python',590)
    stud1.printStudent()




    // python: init
    // java :class name is same as constructr name
    // javascript :constructor