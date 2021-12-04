export const twoSum = (nums: number[], target: number) => {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
    }
    }
  }
  return result;
};

console.log(twoSum([3, 3], 6));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// var twoSum = function (nums, target) {
//   let result = [];
//   //cycle through array
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };
