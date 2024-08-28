import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskInterface } from '../../data/TaskInterface';
import { SharedModule } from '../../modules/shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent, ],
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

  toggleReminder (task: TaskInterface) {
    // Toggle the reminder property
    task.reminder = !task.reminder;
    // Call updateTaskReminder to save the changes
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
