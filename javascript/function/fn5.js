function sub(num1,num2)
{
    if(num1>num2)
    {
        res=num1-num2
        return res
    }
    else 
    {
        res=num2-num1
        return res
    }
}
result=sub(6,30)
console.log(result)



// return num1>=num2?num1-num2:num2-num1




function supersub(num1,num2)
{
    result=num1-num2
    return Math.abs(result)

}
result=supersub(7,50)
console.log(result)