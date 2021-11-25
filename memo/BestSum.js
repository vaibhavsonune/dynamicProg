const baseSum = ( targetSum, numbers, memo = {} ) => {
//basecase
if(targetSum === 0) return [];
if(targetSum < 0) return null;
if (targetSum in memo) return memo[targetSum] ;
let shortestComb = null;

for(let num of numbers){
		const remainder =  targetSum - num;
    const remainderComb = baseSum(remainder, numbers, memo);
   
	if(remainderComb !== null ){
  	const comb =  [...remainderComb, num];
    if(shortestComb === null || shortestComb.length > comb.length){
     shortestComb = comb;
    }
     memo[targetSum] =  comb;
  }
}

return shortestComb;
};

console.log(baseSum(1000, [5,3,4,7,25]));
