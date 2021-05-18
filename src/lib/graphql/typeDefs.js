
const path = require('path')
const fs = require('fs')

let typeDefs = ''
const rootPath = path.join(__dirname, './typeDefs');
// console.log("fs.readdirSync(rootPath)",fs.readdirSync(rootPath));
let files = fs.readdirSync(rootPath)
for (let index = 0; index < files.length; index++) {
    let typeDef = files[index];
    console.log("typeDeftypeDef",typeDef);
    if (typeDef === "index.js") {
        continue
    }
    typeDefs += fs.readFileSync(path.join(rootPath, typeDef), 'utf8')
}


module.exports = typeDefs