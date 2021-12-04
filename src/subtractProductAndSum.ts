export function subtractProductAndSum(n: number) {
  const arr = n.toString().split("");
  return (
    n
      .toString()
      .split("")
      .reduce((accumulator, current: any) => accumulator * current, 1) -
    arr.map(Number).reduce((a, b) => a + b)
  );
}
