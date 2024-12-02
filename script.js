// iterative fibonacci

function fib(n) {
    
    if (n == 0) return [];
    if (n == 1) return [0];
 
    let result = [0,1];
  
     for (let i = 2; i < n; i++) {
        let nextVal = result[i-1] + result[i-2];
        result.push(nextVal);    
      }
  
    return result;
  
}

console.log(fib(8)); // returns [0,1,1,2,3,5,8,13]
