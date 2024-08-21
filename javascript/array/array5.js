// binary search
// array should be in sorted order

// for sorting -sort()
var arr=[1,2,3,4,5]
// function compare(n1,n2)
// {
// if(n1<n2)
// {
//     return -1
// }
// else{
//     return 1
// }

// }
// // compare=(n1,n2)=> n1<n2?-1:1
arr.sort((n1,n2)=> n1-n2)
// arr.sort((n1,n2)=> n2-n1)

// // arr.sort()
console.log("after sortng " +arr);


low = 0
up = arr.length-1
num = 2
status=0
count=0;
while(low<=up)

{
    count++;
    mid=Math.floor((low+up)/2)
    if(num<arr[mid])
    {
        up=mid
    }
    else if(num>arr[mid])
    {
        low=mid+1
    }
    else if(num==arr[mid])
    {
    status=1
    break;
    }
    

}
console.log("total iteration ",count);
console.log(status==1?"found":"not found");
