accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
        {
to:1001,amount:5000,msg:'ebill',mode:'gpay'
        },
        {
            to:1002,amount:2000,msg:'emi',mode:'neft'

        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonepay'
        },
    ]
    
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
        {
to:1000,amount:1000,msg:'grossary',mode:'gpay'
        },
        {
            to:1002,amount:2000,msg:'emi',mode:'neft'

        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonepay'
        },
    ]
    
    },
    {
        acno:1002,ac_type:'savings',balance:45000,transaction:[
        {
to:1000,amount:5000,msg:'ebill',mode:'gpay'
        },
        {
            to:1001,amount:2000,msg:'emi',mode:'neft'

        },
        {
            to:1003,amount:1000,msg:'recharge',mode:'phonepay'
        },
    ]
    
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
        {
to:1001,amount:5000,msg:'ebill',mode:'gpay'
        },
        {
            to:1002,amount:2000,msg:'emi',mode:'neft'

        },
        {
            to:1000,amount:1000,msg:'recharge',mode:'phonepay'
        },
    ]
    
    },




]
// 1.find total number of accounts
console.log(accounts.length)

// 2.print the accountnumber whose ac_type is savings
console.log("2.-----------")
accounts.filter(a1=>a1.ac_type=='savings').forEach(d=>console.log(d.acno))

// 3.print the blnce of account number 1000
console.log("3.-----------")
console.log(accounts.find(data=>data.acno==1000).balance)
// accounts.filter(a1=>a1.acno==1000).forEach(d=>console.log(d.balance))

//4. print all gpay transaction
console.log("4.-----------")
console.log(accounts.map(a1=>a1.transaction).flat().filter(g=>g.mode=='gpay'))


// 5.print all transaction whose amt>5000
console.log("5-----------")
accounts.map(a1=>a1.transaction).flat().filter(g=>g.amount>=5000).forEach(r=>console.log(r))


// 6.print credit transaction of account 1002
console.log("6-----------")
credittrans=accounts.map(a1=>a1.transaction).flat().filter(g=>g.to=1002)
console.log(credittrans)

// 7.print debit transaction of account 1002
console.log("7-----------")
debittrans=accounts.find(a1=>a1.acno==1002).transaction
console.log(debittrans)
// print transaction history of 1002



console.log("8-----------")

// history={
//     debit:debittrans,
//     credit:credittrans
// }
// console.log(history)


// using spread operator
// instead of flat also,spread can use
history=[...credittrans,...debittrans]
console.log(history)




// 9.print highest  blnce account details
console.log("9-----------")
console.log(accounts.reduce((d1,d2)=>d1.balance>d2.balance?d1:d2))


