
// no,dstrct,pstv case,dth rate,curred rate,1st dose,2nd dose
covid_data=[
    [1,'ernamkulam',34000,2000,23000,20000,2000],
    [2,'idukki',14000,3000,25000,30000,1000],
    [3,'thrissur',24000,4000,33000,24000,2500],
    [4,'pathanamthitta',20000,2000,45000,22000,1500],
    [5,'kozhikode',44000,5000,12000,21000,500],
    [6,'palakkad',12000,1000,20000,23000,3400],
    [7,'kottayam',27000,1500,27000,14000,1000],
    [8,'kollam',14000,2500,25000,18000,2700],
]
// district having highest positive cases
console.log("red zone "+covid_data.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2).find(item=>item[1]))


console.log("--------------------------------")
// dstrct having highest first dose vaccine
console.log(covid_data.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2).find(item=>item[1]))



console.log("--------------------------------")

// dstrct having lowest death rate
console.log(covid_data.reduce((item1,item2)=>item1[3]<item2[3]?item1:item2).find(item=>item[1]))

console.log(covid_data.reduce((item1,item2)=>item1[3]<item2[3]?item1:item2).find(item=>item[1]))

console.log("--------------------------------")

// sort data with positive case in desc-sort
console.log(covid_data.sort((item1,item2)=>item2[2]-item1[2]).map(item=>item[1]))
console.log("--------------------------------")

// is any dstrct with positive cases greater than 15000
console.log(covid_data.filter((item)=>item[2]>15000))

console.log("--------------------------------")

// sort  1st dose vaccine
console.log(covid_data.sort((item1,item2)=>item2[5]-item1[5]))
console.log("--------------------------------")

// thrssr details
console.log(covid_data.find(item=>item=='thrissur'))


// tot num of positive cases
console.log(covid_data.reduce((item1,item2)=>item1[2]+item2[2]))
// tot curred case

// print  curred case in idukki-find
