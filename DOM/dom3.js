function login()
{
    // local storage
    // to store data in local storage:setItem(key:string,value:string)
// setItems has 2 arguments
    user=uname.value
    console.log(user);
    localStorage.setItem("username",user)
    // uname is already put in variable user
     window.location= "dom4.html"
}
