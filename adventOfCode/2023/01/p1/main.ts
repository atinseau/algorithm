

// const input = await Bun.file('input_example.txt').text()
const input = await Bun.file('input.txt').text()

const lines = input.split('\n')


const getCode = (str: string) => {
  const onlyDigit = str.replace(/[a-z]/g, '')
  return parseInt(`${onlyDigit[0]}${onlyDigit[onlyDigit.length - 1]}`)
}


// console.log(getCode(lines[1]))

const result = lines.reduce((acc, line) => {
  acc += getCode(line)
  return acc
}, 0)

console.log(result)