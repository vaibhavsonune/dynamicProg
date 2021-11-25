/*
	Write a Function Fib(n) that takes  in a number as an argument.
  The function should return n-th number from the Fibonacci Sequence.
  
  The 1st and 2nd  number of the sequence is 1.
	To genrate the next number of the sequence, we sum the previous two.
  
  example:-
  n			=  1,2,3,4,5,6,7,8,9,....
  f(n)	=  1,1,2,3,5,8,13,21,34,,...
  
*/


const fib = (num, memo={}) => {
	//base
  if(num <= 2) return 1;
  if(num in memo) return memo[num];
 
 memo[num] = fib(num - 1,memo) + fib(num -2, memo);
 return memo[num];
};

console.log(fib(50));
