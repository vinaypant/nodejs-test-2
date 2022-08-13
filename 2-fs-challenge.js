const fs = require('fs')
const path = require('path')

const folderPath = path.resolve(__dirname, './myfolder', 'folder1')
const filePath = path.join(folderPath, 'bio.txt')

fs.mkdirSync(folderPath, { recursive: true })

console.log('Directory created')

fs.writeFileSync(filePath,
    'Hello this is the first content', { flag: 'a' })

console.log('Content written')

fs.appendFileSync(filePath, 'New content appended')

console.log('Content appended')

const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" })

console.log(`filecontent: ${fileContent}`)

fs.renameSync(filePath, `${folderPath}/mybio.txt`)

console.log('File renamed')

//***********deleting file******** 
fs.unlinkSync(`${folderPath}/mybio.txt`)

//***********deleting directory******** 
fs.rmdirSync(`${folderPath}`,{recursive:true})
