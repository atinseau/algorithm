
const table = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "height": 8,
  "nine": 9
}

const input = await Bun.file('input_example.txt').text()
// const input = await Bun.file('input.txt').text()
const lines = input.split('\n')


const getCode = (line: string) => {

  const db: number[] = []
  let tmp = line

  while (tmp.length) {

    console.log(db, tmp)
      
    const numWord = Object.keys(table).find((value) => tmp.startsWith(value)) as keyof typeof table | null
    if (numWord) {
      db.push(table[numWord])
      tmp = tmp.slice(0, numWord.length)
      continue;
    }

    if (tmp[0].match(/^[0-9]/)) {
      db.push(parseInt(tmp[0]))
    }

    tmp = tmp.slice(0, 1)
  }

  return db
}

console.log(lines[0])
console.log(getCode(lines[0]))