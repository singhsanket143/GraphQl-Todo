import TodoRepository from "../repository/todoRepository";

class TodoService {
    todoRepository: TodoRepository;
    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async getAll() {
        return await this.todoRepository.getAll();
    }

    async create(title: String, tags: String[]) {
        return await this.todoRepository.create(title, tags);
    }
}

export default TodoService;