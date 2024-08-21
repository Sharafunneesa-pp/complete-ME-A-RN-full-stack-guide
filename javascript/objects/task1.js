// pattern='ABABBC'
// FIND FIRST RECURSIVE  CHRCTR FROM THE GIVEN PATTERN
// output:'A'
pattern='ABBBC'
out={}
for(let char of  pattern)
{
    // console.log(char)
    if(char in out)
    {
console.log(`first rec char is ${char}`)
break
    }
    else{
        out[char]=1
    }
}

