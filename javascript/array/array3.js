// total expense,largest and smallest expense
// var expense=[10000,20000,15000,24000,17000,12000]


// toal expense
// total=0
// for(let amount of expense)
// {
//     total+=amount
// }
// console.log("total expense is :" +total);

// largest amount in expense array
var expense=[10000,20000,15000,24000,17000,12000]

total=0
max=0
min=expense[0]
for(let amount of expense )
{
    total+=amount
    if(max<amount)
    {
    max=amount
}
if(max>amount)
    {
    min=amount
}
}
console.log("total expense is :" +total);

console.log("largest expense is :" +max)
console.log("smallest expense is :" +min)
