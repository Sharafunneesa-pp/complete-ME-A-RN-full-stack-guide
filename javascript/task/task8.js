// find exponent of number and display the number whose exponent is in range of 8 and 36

var exp=3
low=8
up=36
result=0
i=1
while(i<=up)
{
    result=i**exp
    if(result>=low && result<=up)
    {
        console.log(i)
    }
    i++
}