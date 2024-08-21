// for each help to fetch each item from an array


products=[
    [1,'hide and seek',50,20],
    [2,'lays',10,80],
    [3,'oreo',40,100],
    [4,'parleg',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
console.log("----------------------------")

console.log(products.map(p=>p[1]))




console.log("----------------------------")

console.log(products.forEach(p=>console.log(p[1])));


console.log("----------------------------")
// for(let p of products)
// {
//     console.log(p[1])
// }
console.log