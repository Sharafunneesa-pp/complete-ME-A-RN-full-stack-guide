// generate new array afer subtracting  each item from total sum of the item present in that array
// input: var arr=[4,5,6]
// output: var arr=[11,10,9]
arr=[4,5,6]
sum=0
for(let item of arr)
{
    sum+=item
}
for(let index in arr)
{
    arr[index]=sum-arr[index]
}
console.log(arr);
