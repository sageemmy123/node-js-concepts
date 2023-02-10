//Creating the function
function factorial (n){
    //checking to return the best case of the recursion
    if (n < 0 ){
        return 'Invalid input: n must be a positive integer.';
    }
    
    //recursion being implemented here
    let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        
    return result;
}

//Using the function 
console.log(factorial(5))