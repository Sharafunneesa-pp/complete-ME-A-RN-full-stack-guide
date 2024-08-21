// validate gmail
// function gmail(gid)
// {
//     if(gid.endsWith("@gmail.com"))
//     {
// console.log("validate")
//     }

// else
// {
//     console.log("invalid")
// }
//     }

// gmail("nisha@gmail")
function validate(email)
{
    return email.endsWith("@gmail.com")?"valid":"invalid"
}
console.log(validate("nisha@gmail.com"));