//  create bank class
class bank{

    createAc(acno,uname,phone,balance)
    {
this.acno=acno,
this.uname=uname,
this.phone=phone,
this.balance=balance
console.log("account created")
    }
    deposit(amount)
    {
        this.balance+=amount
        console.log(`${amount} depositted successfully.`)
    }
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log(`transaction failed ....insufficient balance`)
        }
        else{

        
        this.balance-=amount
        console.log(`${amount} debitted successfully`)
        }
    }
    balanceenquiry()
    {
        console.log(`your current balance is : ${this.balance}`)
    }
}
b=new bank()
b.createAc(1000,'max','7678689',10000)
b.deposit(1000)
b.withdraw(2000)
b.balanceenquiry()