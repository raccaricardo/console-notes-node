const fs = require('fs');

const path = './db/tasks/tasks.json'

const saveData = (data) => {

    try {

        fs.writeFileSync(path, JSON.stringify(data));        

    } catch (e) {
        console.error(e);
    }

}
const readData = (data) => {

    if (!fs.existsSync(path)) {
        return null;
    }
    const info = fs.readFileSync(path, 'utf8')
    return JSON.parse(info);
    return null;

}

module.exports = {
    saveData,
    readData,
}