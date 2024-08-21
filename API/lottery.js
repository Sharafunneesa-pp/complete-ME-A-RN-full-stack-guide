var luckyDraw=new Promise((res,rej)=>{
    let lotNum=5
    let prizeNumber=Math.floor(Math.random()*10)
if(lotNum==prizeNumber)
    {
        res("you won lottery!!!")
    }
    if(lotNum!=prizeNumber)
    {
rej("better luck next time")
    }
    })
    luckyDraw.then(data=>console.log(data)).catch(err=>console.log(err))
