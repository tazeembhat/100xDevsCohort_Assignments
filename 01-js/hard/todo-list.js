/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.list = [];
    }

    add(str){
        this.list.push(str);
    }
    remove(index){
        this.list.splice(index, 1);
    }
    update(index, updated){
        if(index < this.list.length){
            this.list[index] = updated;
        }
    }
    get(index){
        if(index < this.list.length){
            return this.list[index];
        }
        else {
            return null;
        }
    }
    getAll(){
        return this.list;
    }
    clear(){
        this.list = [];
    }
}

module.exports = Todo;
