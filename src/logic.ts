const cardMultiplyIncrement = 2
const cardNumber = 6

export function generateInitialCards (nums: number[]): number[] {
  while (nums.length < cardNumber) {
    const lastIndex = nums.length - 1
    const valueAtLastIndex = nums[lastIndex]
    nums.push(valueAtLastIndex * cardMultiplyIncrement)
  }

  return nums
}

/**
 Bitwise operator to transform nums
 For example,
 Check if trick number 64 is bitwise with number 32
 That is - 1000000 bitwise 100000 = 0
 Or..
 trick number 8 bitwise 12,
 That is - 10000 bitwise 1100 = 10000
 If values are bitwise, include them so we can use them in this trick!
 Once these values are included, we can assume that every card with these numbers in them has a bitwise number at the top left
 **/
export function retrieveBitwiseIntegers (nums: number[]): number[][] {
  return nums.map((trickNumber: number) =>
    [...Array(64)].map((_, i) => i).filter((i) => i & trickNumber)
  )
}
