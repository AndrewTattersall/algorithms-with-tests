export const palidromeNumber = function (x: any) {
  let reversed = x.toString().split("").reverse().join("");
  return reversed == x ? true : false;
};

console.log(palidromeNumber(4334));
