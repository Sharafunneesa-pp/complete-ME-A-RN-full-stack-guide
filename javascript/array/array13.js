// some()- it return either true or false
// apply where it return true or false
products=[
    [1,'hide and seek',50,20],
    [2,'lays',10,80],
    [3,'oreo',40,100],
    [4,'parleg',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

// is there any product can purchase by 10 rs
console.log(products.some(p=>p[2]<=10))


// is there any prodct with avlbl stock>100
console.log(products.some(p=>p[3]>100))


// is avlble in the range of 10-20
console.log(products.some(p=>p[2]>=10  && p[2]<=20))




// print all prod in the range of 10 to 20
console.log(products.filter(p=>p[2]>=10  && p[2]<=20).map(item=>item[1]))



