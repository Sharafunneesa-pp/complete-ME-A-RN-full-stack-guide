var arr=[10,2,4,15,3,14]
var element=20
// check element = 2 is present or not
// 
f=0
var count=0
for(let num of arr)
{
    if(num==element)
    {
        f=1;
        break;
    
    }
    count++
}
console.log("total iteration:",count)
console.log(f==1? "present":"not present");

    // if(f==1)
    // {
    //     console.log("present")
    // }
    // else{
    //     console.log("not present")
 
    // }





    
