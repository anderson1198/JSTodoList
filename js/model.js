export default class Model {
    constructor() {
        this.view = null;
        this.todo = JSON.parse(localStorage.getItem('todo'));
        if(!this.todo || this.todo.length < 1){
            this.todo = [{
                id: 0,
                title: 'prueba',
                description: 'soy una prueba',
                completed: false

            }]

            this.currentId = 1;
        }else{
            this.currentId = this.todo[this.todo.length - 1].id + 1;
        }

    };

    setView(view) {
        this.view = view
    };

    save() {
        localStorage.setItem('todo',JSON.stringify(this.todo));
    }

    getTodos() {
       return this.todo.map(todo => ({...todo}));
    }

    findTodo(id) {
        return this.todo.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {

        const index = this.findTodo(id);
        const todo = this.todo[index];
        todo.completed = !todo.completed;
        this.save();
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }

        this.todo.push(todo);
        console.log(this.todo);
        this.save();
        return todo
    }

    removeTodo(id) {
        const index = this.findTodo(id);
        this.todo.splice(index, 1);
        this.save();
    }
    
    editTodo(id,values) {
        const index = this.findTodo(id);
        this.todo[index].title = values.title;
        this.todo[index].description = values.description;
        this.todo[index].completed = values.completed;

        this.save();
    }
}