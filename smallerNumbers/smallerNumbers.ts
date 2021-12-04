export function smallerFunction(nums: number[]) {
  let arr: number[] = [];
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
}
