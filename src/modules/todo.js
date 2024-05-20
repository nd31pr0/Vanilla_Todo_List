export class ToDo {
    constructor(title, description, dueDate, priority, notes='', checkList=[]) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList;
        this.completed = false;
    }
    toggleComplete(){
        this.completed = !this.completed;
    }
}