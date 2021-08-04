const { v4 } = require('uuid')

class Todo {
    constructor(description) {
        this.id = v4();
        this.description = description;
        this.completedDate = null;

    }

}

module.exports = Todo;