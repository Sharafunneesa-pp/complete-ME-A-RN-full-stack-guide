// local storage
// 2.to get datsa from local storage -getItem(key:string)
var uname=localStorage.getItem('username')
// username is the key in local storage
console.log(uname)
head1.innerHTML=`Welcome ${uname}`
head1.innerHTML="Welcome "+uname
// id=head1 //refer id of welcome in dom4.html
function logout()
{

// 3. to  remove data from local storage :removeItem()
localStorage.removeItem('username')
window.location = "dom3.html"
// for moving to dom3.html

}