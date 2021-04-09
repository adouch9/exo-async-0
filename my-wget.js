const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://fr.wikipedia.org/wiki/Black_hat')
    
    await fsPromises.writeFile('index.html', response.data) // response.data est une string qui est la page html
    const stats = await fsPromises.stat('index.html')

    console.log(response)
    console.log(stats.size)
  
  } catch (e) {
    console.log(e.message)
  }
}

main()