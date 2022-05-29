
 function getAllCase(arg1){ 
    
    let subStrings = []
 
    for(let i=0; i< arg1.length; i++){
       for (let j=0; j < arg1.length; j++){
        if(arg1.slice(i,arg1.length-j).length !== 0) subStrings.push(arg1.slice(i,arg1.length-j))
       }   
    }
    return subStrings;
  }
 
 
  
 function task1(){
    let args
    let resultArr = []
    if(process.argv.length <= 2) return("")
    else args = process.argv.slice(2)
    if(args.length === 1) return(args[0])
    const arrayPossiblity = getAllCase(args[0])
    for (let i=0; i < arrayPossiblity.length; i++){
        let x=0
        for (let j=1; j < args.length; j++){
            if(args[j].indexOf(arrayPossiblity[i]) !== -1) x++
        }
        if(x === args.length -1) resultArr.push(arrayPossiblity[i])
    }
    let result = resultArr[0]
    for(let i=1; i< resultArr.length; i++){
       result = resultArr[i].length > result.length ? resultArr[i] : result 
    }
    if(!result) return ""
    return result
  }
 
 console.log(task1())
