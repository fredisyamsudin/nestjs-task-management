import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Task } from "./dto/task.entity";
 
@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }
}
