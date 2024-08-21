// var i=10
i=10;
// by default it is var.
// var means global scope
// let scope inside where it is
console.log( "i (initially)=" +i)


// for(let i=0;i<5;i++){
for(var i=0;i<5;i++){
    console.log("i in loop"+i)
}

console.log("i (after loop)="+i)
// scope of i in for loop inside loop only if it is let i,after loop  output will be same as initial value
// if var i, after loop value will be 5.
// multiple declaration is not possible if it is constant
