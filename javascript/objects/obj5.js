weatherdata=[
    
       {district:'thrissur',weather:32} ,
        {district:'kottayam',weather:29},
        {district:'palakkad',weather:34},

        {district:'ernamkulam',weather:33},

        {district:'thrissur',weather:29},
        {district:'kottayam',weather:30},
        {district:'palakkad',weather:32},
        {district:'ernamkulam',weather:31}
    ]
    // 1.print dstrct with its highest tenp

    output={}
    for(let data of weatherdata)
    {
        let distname=data['district']
        let curtemp=data['weather']
        if(distname in output)
        {
            let oldtemp=output[distname]
            if(curtemp>oldtemp)
            {
                output[distname]=curtemp

            }
        }
            else{
                output[distname]=curtemp
  
            }

        }
      console.log(output);  
    

    // 2.display output in srt order based on  temprtr
// to convert obj to array - object.entries() 
    // object.entries(output)
    console.log("sorting based on temperature")
Object.entries(output).sort((d1,d2)=>d2[1]-d1[1]).forEach(d=>console.log(d[0]))
