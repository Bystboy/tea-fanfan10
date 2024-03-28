// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Example usage of helper functions
  console.log(square(5)); // Output: 25
  console.log(isEven(6)); // Output: true
  console.log(isOdd(7)); // Output: true
  