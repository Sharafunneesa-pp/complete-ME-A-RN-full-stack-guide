// user register
function register()
{
    uname=reg_name.value
    acno=reg_acno.value
    pswd=reg_pswd.value
    balance=2000
    // acnoDetails object
    acnoDetails={
        uname,
        acno,
        pswd,
        balance
    }
if(acno in localStorage)
{
alert("Already an existing user..please login ")
window.location.href="index.html"

}
else
{
    // store data in local storage
    localStorage.setItem(acno,JSON.stringify(acnoDetails))
    alert("Register Successfully")
    window.location.href="home.html"

}

}




function login()

    {
         // 1.fetch the input values from html
        acno = login_acno.value
        pswd = login_pswd.value
    // 2.verify credential
if(acno in localStorage)
  {
     acnoDetails = JSON.parse(localStorage.getItem(acno))
    console.log(acnoDetails.pswd)
 
    if(pswd != acnoDetails.pswd)
    {
        window.location="login.html"
  
        alert("incorrect password")
    }
else
{
    window.location.href="home.html"
    alert("Login successfully")  
}

  }
else
{
    window.location="register.html"

    alert("user doesnot exist")
}


    }






// // login
// function login()
// {
//  // 1.fetch the input values from html
// acno = login_acno.value
// pswd = login_pswd.value
//        // 2.verify credential
// if(acno in localStorage)
// {
// acnoDetails = JSON.parse(localStorage.getItem(acno))
// console.log(acnoDetails.pswd)
// if(pswd == acnoDetails.pswd)
// {
//    alert("login successfully")
//    window.location.href="home.html"

// }
// else{
//     alert("incorrect password")
// }
// }
// else
// {
//     alert("user doesnot exist")
// }
// }





