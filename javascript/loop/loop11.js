// wap to check prime or Not
f=0;
num=18
for(i=2;i<=num;i++)
{
    if(num%i==0)
    f=1;
    break;
}
if(f==0)
// if(num==i)
{
    console.log("prime")
}
else
{
    console.log(" not prime")
}