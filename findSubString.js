/**
 * 
 * @param {String} arg1 
 * @param {String} arg2 
 * @returns String : The longest common substring between 2 Strings
 */
 function largestSubString(arg1, arg2){ 
    
    let subStrings = []
 
    for(let i=0; i< arg2.length; i++){
       for (let j=0; j < arg2.length; j++){
           const subStr = arg2.slice(i,arg2.length-j)
           if(arg1.indexOf(subStr) !== -1){
                 subStrings.push(subStr)
           }
       }   
    }
    for(let i=0; i< arg2.length; i++){
       for (let j=0; j < arg2.length; j++){
           const subStr = arg2.slice(j,arg2.length-i)
           if(arg1.indexOf(subStr) !== -1){
                subStrings.push(subStr)
           }
       }   
    }
 
     let substr = subStrings[0]
     for(let i=1; i< subStrings.length; i++){
        if(subStrings[i].length > substr.length) substr = subStrings[i] 
     }
 
     return substr
  }
 
  
 function findSubString(...args){
    let subStringsArray = []
 
    if(args.length === 0) return "No argument"
    if(args.length === 1) return args[0]
    else {
        for(let i=0; i< args.length; i++){
            for(let j=i+1; j< args.length; j++){
              subStringsArray.push(largestSubString(args[i],args[j]))
            }
        }
    }
 
    result = subStringsArray[0]
    for(let i=1; i< subStringsArray.length; i++){
       if(subStringsArray[i].length < result.length) result = subStringsArray[i]
    }
 
    return result
 }
 
 console.log(findSubString())
 