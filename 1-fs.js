const fs = require('fs')
const path = require('path')

console.log('start')

const synContent = fs.readFileSync('./files/file.txt', { encoding: "utf8" })
fs.writeFileSync('./files/file.txt', synContent, { flag: 'a' })

//let resolvedPath = path.resolve(__dirname, './files/file.txt')
let absolutePath = path.resolve('./files', 'file.txt')   //gives the absolute path
//let joinedPath = path.join(__dirname, './files/file.txt')
let relativePath = path.join('./files', 'file.txt')  //gives the relative path

console.log(`absolute path ${absolutePath}`)
console.log(`relative path ${relativePath}`)

fs.readFile(absolutePath, { encoding: 'utf8' }, (err, result) => {
    if (err) {
        console.log('Error in file')
    }
    else {
        console.log(`File contents are : ${result} from path :${absolutePath}`)

    }
})

fs.appendFileSync('./files/file.txt','I am appending the content')

const buf_Data=fs.readFileSync('./files/file.txt');
console.log('Bud data',buf_Data.toString())

//rename file
fs.renameSync('./files/file.txt','./files/file2.txt')
console.log('done');