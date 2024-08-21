a1=[10,11,12,20,30]
a2=[11,20,21,22,30]

p1=0;
p2=0;
count=0
while(p1<a1.length && p2<a2.length)
{
    if(a1[p1]==a2[p2])
    {
        console.log(`common element is ${a1[p1]}`)
        p1++
        p2++
    }
    else if (a1[p1]<a2[p1])
    {
        p1++
    }
    else if(a1[p1]>a2[p2])
    {
    p2++
    }
    count++
}
console.log("total iteration are :" ,count)
// for(let item1 of a1){
// for (let item2 of a2)
// {
// if(item1==item2)
// {
//     console.log(item1)
// }
// count++
// }
// }

