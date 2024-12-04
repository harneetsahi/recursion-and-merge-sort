//// iterative fibonacci

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

//// recursion

function fibRec(n) {
  
    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0,1];
  
    let fib = fibRec(n-1);
  
    let nextVal = fib[fib.length-1] + fib[fib.length-2];
    fib.push(nextVal);        
  
    return fib;
  
}

console.log(fibRec(8));  // returns [0,1,1,2,3,5,8,13]

//// mergeSort

function mergeSort(arr) {
  
    if (arr.length <= 1) return arr;

    let midpoint = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, midpoint));
    let rightArr = mergeSort(arr.slice(midpoint));
  
    return merge(leftArr, rightArr);

}

function merge(leftArr, rightArr) {
  
    let sortedArr = []
  
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
  
    return sortedArr.concat(leftArr, rightArr);

}

console.log(mergeSort([83,2,34,5,1,4,21,11,90,13,3])); // [1,2,3,4,5,11,13,21,34,83,90]

