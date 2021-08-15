function selectionSort(arr) {
  // type your code here
  let sortedArray = []
  
  let findMin = (arr) => {
    let min = arr[0]
    for(i = 0; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i]
      }
    }
    return min
  }

  while(arr.length > 0){
    let currentMin = findMin(arr)

    sortedArray.push(currentMin)
    
    arr.splice(arr.indexOf(currentMin), 1)
  }

  

  return sortedArray

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-5, 0, 1, 8, 27]");
  console.log("=>", selectionSort([0, 8, 27, -5, 1]));

  console.log("Expecting: [-43, -7, 18, 21, 72]");
  console.log("=>", selectionSort([72, 18, 21, -7, -43]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  let startTime = Date.now()
  
  let count = 1000
  while(count > 0){
    selectionSort(longInput)
    selectionSort([28, -52, 0])
    count -= 1
  }

  let averageRuntime = (Date.now() - startTime)/2000

  console.log(averageRuntime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
  // initialize empty array
  // find smallest value in existing array
  // remove from existing array and add to empty array
  // continue until existing array is empty

                    // for each subsequent element in input array:
                      // check against all preceding elements: 
                        // if value is lower, move in front
                        // if value equal or higher, add to end of array
                    // return sorted array

// And a written explanation of your solution
  // an empty array is initialized to store the sorted values
  // a function finds the minimum number in the array by:
    // setting a variable "min" equal to the first element
    // checking each element against the current min value and, if the element is smaller, 
    // replacing the min value with that element (repeated until all elements checked)
  // then, as long as the original array has one or more elements,
    // we find the minimum value in the original
    // push it to the sorted array
    // and remove it from the original array so the array is shorter in length
    // this is repeated until the original array is empty
