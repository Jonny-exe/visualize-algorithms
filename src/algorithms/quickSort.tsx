const swap = (arr: number[], left: number, right: number) =>  {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

const partitionHigh = (arr: number[], low: number, high: number) => {
  //Pick the first element as pivot
  let pivot = arr[high];
  let i = low;
  
  //Partition the array into two parts using the pivot
  for(let j = low; j < high; j++){
    if(arr[j] <= pivot){      
      swap(arr, i, j);
      i++;
    }
  }
  
  swap(arr, i, high);
  
  //Return the pivot index
  return i;
}

export const iterativeQuickSort = (arr: number[], setState: (state: number[]) => void) => {
  //Stack for storing start and end index
    interface Stack {
        [key: string]: number;
        x: number;
        y: number;
    }

  let stack: Stack[] = [];
  
  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;
  
  //Push start and end index in the stack
  stack.push({x: start, y: end});
  let count = 0
  
  //Iterate the stack
  while(stack.length){
    //Get the start and end from the stack
    const { x, y } = stack.shift();
    
    //Partition the array along the pivot
    const PI = partitionHigh(arr, x, y);
    
    //Push sub array with less elements than pivot into the stack
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    
    //Push sub array with greater elements than pivot into the stack
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
    let copy = [...arr]
    setTimeout(() => {
      setState(copy)}, count++ * 1000)
  }
}
