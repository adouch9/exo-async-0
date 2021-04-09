const fsPromises = require('fs/promises')

const myReadFileAndWrite = async () => {


try {
  let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
  let txt2 = await fsPromises.writeFile('hello.txt', 'write.txt' )

  txt1 = txt1.toUpperCase()
  console.log(txt1)
  console.log(txt2)
} catch (e) {
  console.log(e.message)
}

}
myReadFileAndWrite()