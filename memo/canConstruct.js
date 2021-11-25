/*
	Write a Function canConstruct(target, wordBank) that accepts  a string and array of strings.
  
  The Function should return a boolean indicating wheather  or not 'target' can be constructed by concatenating elements of the  workBank array
  
  you may reuse elements of wordbank as many times as needed
*/

const canConstruct = (target, wordBank, memo = {} ) => {
	if(target === '') return true;
  if(target in memo) return memo[target];
  for (let word of wordBank){
  
  		if(target.indexOf(word) === 0){
      	const suffix =  target.slice(word.length);
        if (canConstruct(suffix,wordBank, memo) === true){ 
        memo[target] = true;
        return true;
        }
      }
  }
  
  return false;
}

console.log(canConstruct('abcdefabcabcdefdefdefabcabcabcbcbcefdefz',['ab','bc','abc','def','ef']));
