// [id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',40,80],
    [3,'oreo',40,100],
    [4,'parleg',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]


//  display all product name -map()
console.log(products.map(num=>num[1]))



// display list of product under 50-filter()
console.log(products.filter(item=>item[2]<50))

console.log(products.filter(item=>item[2]<50).map(item=>item[1]))



// print details of 'oreo' - filter()
console.log(products.filter(num=>num[1]=='oreo'))


// disp out of stock


// srt product based on avlble stock by desc

// print prod hav max avlbl stock