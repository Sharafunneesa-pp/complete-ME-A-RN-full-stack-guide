db = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
    1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] }
}

//1. create a function for validate account number. To validate account check
//if account number in db return true otherwise false

function validateAcno(acno) {
    return acno in db ? true : false
}
console.log(validateAcno(1000))

//2. create a function authenticate user using account number and password
//if both are in db the print 'access granted' otherwise 'permission denied'
function authenticateUser(acno, pswd) {
    // calling faunction instead of checking  again
    if (validateAcno(acno)) {
        // acno in db?
        actualpswd = db[acno].password
        // square bracket also applied for accessing key from database(db)
        if (pswd == actualpswd) 
        {
            console.log("access granted")
        }
        else {
            console.log("permission denied")
        }
    }


    else {
        console.log("permission denied")
    }
    // acno in db?
}
authenticateUser(1000, 1007)
