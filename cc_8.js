console.log(`cc_8.js has succesfully loaded!`);

// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) { // Calculate the salary after adding the bonus and deducting tax on base salary
    let salary = (baseSalary + bonus) - (baseSalary * taxRate); // Math to calculate the salary
    return `Your salary is $${salary.toFixed(2)}`; // Return the salary with 2 decimal points
}
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: Your salary is $4950.00
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: Your salary is $5955.00
// Task 1 - End

// Task 2 - Product Price after discount
function calculateDiscount(price, discountRate) { // Calculate the final price after applying the discount
    let finalPrice = price - (price * discountRate); // Math to calculate the final price
    return `The final price is $${finalPrice.toFixed(2)}`; // Return the final price with 2 decimal points
}
console.log(calculateDiscount(100, 0.2)); // Expected output: The final price is $80.00
console.log(calculateDiscount(250, 0.15)); // Expected output: The final price is $212.50
// Task 2 - End

// Task 3 - Service Fee Calculation
const calculateServiceFee = (serviceType, amount) => { // Calculate the service fee based on the service type and amount
    const fees = { // Object to store the service fees based on the service type
        "Premium": 0.15, // Premium service fee is 15%
        "Standard": 0.1, // Standard service fee is 10%
        "Basic": 0.05, // Basic service fee is 5%
    };
    const fee = fees[serviceType] ? amount * fees[serviceType] : 0; // Calculate the service fee based on the service type using an if then statement
    return `The service fee is $${fee.toFixed(2)}`; // Return the service fee with 2 decimal points
};
console.log(calculateServiceFee("Premium", 200)); // Expected output: The service fee is $30.00
console.log(calculateServiceFee("Standard", 500)); // Expected output: The service fee is $50.00
// Task 3 End

// Task 4 - Car rental cost calculation
const calculateCarRentalCost = (days, carType, insurance = false) => { // Calculate the total cost of car rental based on the number of days, car type, and insurance using an arrow statement
   const rates = { // Object to store the rental rates based on the car type
         "Economy": 50, // Economy car rental rate is $50 per day
         "Standard": 60,  // Standard car rental rate is $60 per day
         "Luxury": 100, // Luxury car rental rate is $100 per day
   };
   const baseCost = rates[carType] * days; // Calculate the base cost of the car rental
   const insuranceCost = insurance ? days * 20 : 0; // Calculate the insurance cost based on the number of days
   const totalCost = baseCost + insuranceCost; // Calculate the total cost of the car rental
   return `The total cost is $${totalCost.toFixed(2)}`; // Calculate the salary after adding the bonus and deducting tax on base salary
};
console.log(calculateCarRentalCost(3, "Economy", true)); // Expected output: The total cost is $210.00
console.log(calculateCarRentalCost(5, "Luxury", false)); // Expected output: The total cost is $500.00
// Task 4 - End
