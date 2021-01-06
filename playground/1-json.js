const fs = require('fs');

//writing data to json
// const book = {
//     title: 'why to sleep',
//     author: 'unknown author'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync(
//     '1-json.json',bookJSON
// )


//reading data from json
const dataBuffer = fs.readFileSync(
    '1-json.json'
)

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data);

data.title = 'over sleep'

const titleJSON = JSON.stringify(data)

fs.writeFileSync(
    '1-json.json',
    titleJSON
)