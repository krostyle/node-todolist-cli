const fs = require('fs');
const file = './db/data.json'
const saveTask = (data => {
    fs.writeFileSync(file, JSON.stringify(data));
})

const readDB = () => {
    if (!fs.existsSync(file)) {
        return null;
    } else {
        return JSON.parse(fs.readFileSync(file));
    }
}
module.exports = {
    saveTask,
    readDB
}