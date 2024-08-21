// print count of each item in the given array
a=[10,10,30,20,20,40,40,50,50,50]
outp={}
a.map(num=>num in outp?outp[num]+=1:outp[num]=1)
console.log(outp)
