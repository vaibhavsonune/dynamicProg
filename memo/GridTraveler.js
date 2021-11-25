/*
	Say that you are a traveler on 2D grid. You Begin in the Top-left  corner and your goal is to travel to the bottom-right corner. You may only move down or right.
  
  In how many ways can you travel to the goal on a grid with dimensions m*N?
  
  Write a Function gridTraveler(m,n) that calculates this.
  
*/


const gridTraveler = (m,n, memo = {}) => {
//base
		if((m + ','+ n) in memo) return memo[m + ','+ n];
		if(m == 1 && n == 1) return 1;
    if(m <= 0 || n <= 0 ) return 0;
    memo[m + ','+ n] =  gridTraveler(m-1,n, memo) + gridTraveler(m,n-1, memo);
    return memo[m + ','+ n];
};

console.log(gridTraveler(18,18));
