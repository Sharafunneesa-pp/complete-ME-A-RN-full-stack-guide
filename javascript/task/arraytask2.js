var a=[2,3,4,5]
pairsum=9
count=1
a.sort((n1,n2)=>n1-n2)
low=0
up=a.length-1
f=0
while(low<=up)
{
    curSum=a[low]+a[up]
    if(curSum==pairsum)
    {
f=1;
console.log(`pairs are ${a[low]},${a[up]}`);
break;
    }
    else if(curSum<pairsum)
    {
low++
    }
    else if(curSum>pairsum)
    {
up++
    }
    count++
}
if(f==0)
{
    console.log("not found")
}
// for(num1 of a)
// {
//     for(num2 of a)
//     {
//         count++
//         if((num1+num2) == pairsum)
//         {
//         console.log(`pairs are ${num1},${num2}`);
//         break;
//         }
//     }
// }
console.log("total iteration " ,count)