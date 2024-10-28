// Arrow function for addition
const add = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Arrow function for subtraction
const subtract = (...numbers) => numbers.reduce((acc, num) => acc - num);

// Arrow function for multiplication
const multiply = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);

// Arrow function for division
const divide = (...numbers) => {
    if (numbers.includes(0)) {
        throw new Error("Cannot divide by zero");
    }
    return numbers.reduce((acc, num) => acc / num);
};

// Function to perform all operations
const performAllOperations = (...numbers) => {
    const sum = add(...numbers);
    const difference = subtract(...numbers);
    const product = multiply(...numbers);
    const quotient = divide(...numbers);

    return { sum, difference, product, quotient };
};

const numbers = [1, 2, 3, 4]; 

console.log("Addition: ", add(...numbers)); 
console.log("Subtraction: ", subtract(10, 5, 1)); 
console.log("Multiplication: ", multiply(...numbers)); 
console.log("Division: ", divide(100, 2, 5)); 

// Perform all operations at once
const allResults = performAllOperations(...numbers);
console.log("All Operations Results:", allResults);



