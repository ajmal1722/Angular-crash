import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../data/mock-tasks';
import { TaskInterface } from '../data/TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks (): Observable<TaskInterface[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
