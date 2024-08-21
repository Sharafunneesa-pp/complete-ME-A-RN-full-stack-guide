// w a p to find gcd/hcf of 2 numbers 24,36

num1=24
num2=36

for(i=1;i<=num1;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        gcd=i
    }
}
console.log(gcd)
