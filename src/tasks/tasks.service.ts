import { Injectable, NotFoundException } from "@nestjs/common";
import { TasksRepository } from "./tasks.repository";
import { Task } from "./dto/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";

@Injectable()
export class TasksService {

    constructor(private readonly tasksRepository: TasksRepository) {}

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne({ where: { id } });
        if (!found) throw new NotFoundException(`Task with ID "${id}" not found!`);
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {

        const {title, description} = createTaskDto;

        const task = this.tasksRepository.create({
            title,
            description,
            status: TaskStatus.OPEN,
        });

        await this.tasksRepository.save(task);
        return task;
    }
    

    // getAllTasks() {
    //     return this.tasks;
    // }

    // getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;
    //     let tasks = this.getAllTasks();

    //     if(status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter((tasks) => {
    //             if (tasks.title.includes(search)  || tasks.description.includes(search)) {
    //                 return true;
    //             }
    //             return false;
    //         });
    //     }

    //     return tasks;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {

    //     const {title, description} = createTaskDto;

    //     const task: Task = {
    //         id: uuidv4(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);

    //     this.tasks = this.tasks.filter((task) => task.id !== id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);

    //     task.status = status;
    //     return task;
    // }

    // updateTask(id: string): Task {
    //     const task = this.getTaskById(id);

    //     task.status = TaskStatus.IN_PROGRESS;
    //     return task;
    // }
}
