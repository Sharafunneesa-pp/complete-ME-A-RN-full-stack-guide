var pro=new Promise((res,rej)=>{
let watchTime=2
if(watchTime>1)
{
    res("seminar was good")
}

})
pro.then(msg=>{
    console.log(msg)
})
// calling a function inside another function called call back.callback should be like arrow function