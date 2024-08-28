import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskInterface } from '../../data/TaskInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: TaskInterface[] = []

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: TaskInterface) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
      return 
    })
  }
}
