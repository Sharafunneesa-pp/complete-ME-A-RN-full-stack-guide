class Bank {
    db = {
        1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
        1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
        1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] }
    }

    //1. create a function for validate account number. To validate account check
    //if account number in db return true otherwise false
    validateAcno(acno) {
        return acno in this.db ? true : false
    }







    // 2. create a function authenticate user using account number and password
    //if both are in db the print 'access granted' otherwise 'permission denied'

    authenticateUser(acno, pswd) {
        //     // calling faunction instead of checking  again
        if (this.validateAcno(acno)) {
            // acno in db?
            // actualpswd = this.db[acno].password
            // square bracket also applied for accessing key from database(db)
            if (pswd == this.db[acno].password) {
                console.log("Login sucessfully")
            }
            else {
                console.log("incorrect password")
            }
        }


        else {
            console.log("incorrect account number")
        }
    }








// 3.create getbalance function
 getBalance(acno)
{
return this.validateAcno(acno)?this.db[acno].balance:"invalid account number"
}

// // if(this.validateAcno(acno))
// {
// return this.db[acno].balance
// }
// else{
//     console.log("invalid account number")
// }





// 4.create function for transferring fund
fundTransfer(fromac,toac,amount)
{
// fromac and toacno validate
if(this.validateAcno(fromac) && this.validateAcno(toac))
{
if(amount>this.getBalance(fromac))
{
    console.log("insufficient balance")
}
else{
    this.db[fromac].balance-=amount
    this.db[toac].balance+=amount
    console.log("transaction completed")
}
}
else{
console.log("transaction failed")
}
}
}
// create obj for bank
b1 = new Bank()
console.log(b1.validateAcno(1000))
b1.authenticateUser(1000, 1000)
console.log(b1.getBalance(1000))
b1.fundTransfer(1000,1002,2000)
console.log(b1.getBalance(1000))