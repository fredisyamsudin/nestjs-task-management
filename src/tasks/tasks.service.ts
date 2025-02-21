import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksRepository)
        private taskRepository: TasksRepository,
    ){}
        
    




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


    // getTaskById(id: string): Task {
    //     const found = this.tasks.find((task) => task.id === id);

    //     if (!found){
    //         throw new NotFoundException('Task with ID ' + id + ' not found.');
    //     }

    //     return found;
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
