// products is array of objects
products=[
    {pid:100,pname:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pname:'samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pname:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pname:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pname:'motorola',band:'4g',price:10000,display:'lcd'},
]

// 1.print product name only
products.forEach(d=>console.log(d.pname))
console.log()

// 2.print all mobile details whose display is  lcd
products.filter(d=>d['display']=='lcd').forEach(p=>console.log(p))
// 3.print 5g mob pn name
products.filter(d=>d['band']=='5g').forEach(p=>console.log(p.pname))

// 4.sort mobile based on price
products.sort((d1,d2)=>d2.price-d1.price).forEach(p=>console.log(p)
)
// 5.print costly mobile
console.log("costly mobile")
console.log(products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pname)
// 6.print low cost mobile
console.log(products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pname)

