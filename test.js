const fsPromises = require('fs/promises') // pour utiliser les Promises API du module fs
const myReadFile = async () => {
  try {
    // readFile retourne une promise et pas le texte du fichier!!!
    const txt1 = await fsPromises.readFile('hello.txt', 'utf-8') // exécution de readFile
    await fsPromises.appendFile('hello.txt', 'some new data\n') // exécution de appendFile
    //console.log(txt1)
  } catch (e) {
    // On gère les erreurs comme dans un code synchrone
    console.log(e.message)
  }
}
myReadFile()