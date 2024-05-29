import Todo from '../models/todo';
import ITodo from '../types/todo';
class TodoRepository {
    async getAll() : Promise<ITodo[]>{
        return await Todo.find();
    }

    async create(title: String, tags: String[]) : Promise<ITodo> {
        return await Todo.create({
            title,
            tags,
            completed: false
        })
    }
}

export default TodoRepository;