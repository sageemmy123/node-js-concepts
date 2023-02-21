function modifyArray(nums) {
    // Regular example with for-loop:
    let newArr1 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            newArr1.push(nums[i] * 2)
        } else {
            newArr1.push(nums[i] * 3)
        }
    }
     return newArr1
    // Using map function to return values based on condition
    const newArr2 = nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
    return newArr2;

    //Using foreach
    nums.forEach((element, index) => {
        nums[index] % 2 == 0? nums[index] *= 2:  nums[index] *= 3;
    });
    return nums;


}