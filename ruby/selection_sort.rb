def selection_sort(arr)
  # type your code in here

  sorted_array = []

  def find_min(arr)
    min = arr[0]
    count = 0
    while count < arr.length do 
      if arr[count] < min
        min = arr[count]
      end
      count += 1
    end
    min
  end

  while arr.length > 0 do
    currentMin = find_min(arr)
    sorted_array << currentMin
    arr.delete_at(arr.find_index(currentMin))
  end

  sorted_array

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts "Expecting: [-5, 0, 1, 8, 27]"
  print "=> "
  print selection_sort([0, 8, 27, -5, 1])

  puts "Expecting: [-43, -7, 18, 21, 72]"
  print "=> "
  print selection_sort([72, 18, 21, -7, -43])

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
  # initialize empty array for sorted numbers
  # create function to find min of original array by:
    # setting variable 'min' equal to first element
    # iterating through array and replacing value of min if any element is smaller than current value
  # while original array length is greater than 0:
    # find the min value
    # push min value to sorted array
    # remove that min value from original array
    # repeat until original array is empty

# And a written explanation of your solution
  # an empty array is initialized to store the sorted values
  # a function finds the minimum number in the array by:
    # setting a variable "min" equal to the first element
    # checking each element against the current min value and, if the element is smaller, 
    # replacing the min value with that element (repeated until all elements checked)
  # then, as long as the original array has one or more elements,
    # we find the minimum value in the original
    # push it to the sorted array
    # and remove it from the original array so the array is shorter in length
    # this is repeated until the original array is empty