function countingValleys(steps: number, path: string) {
  // Write your code here
  let pathArr = Array.from(path)
  let valley = 0
  let level = 0
  for (let i = 0; i < steps; i++) {
    if (pathArr[i] == 'U') {
      level++
    }
    if (pathArr[i] == 'D') {
      level--
    }
    if (level == 0 && pathArr[i] == 'U') {
      valley++
    }
  }
  return valley
}

console.log(countingValleys(8, 'UDDDUDUU'))
