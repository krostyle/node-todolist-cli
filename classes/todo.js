const { v4 } = require('uuid')

export class Todo {
    constructor(description) {
        this.id = v4();
        this.description = description;
        this.completedDate = this.completedDate;

    }

}