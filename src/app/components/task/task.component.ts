import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TASKS } from '../../data/mock-tasks';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskInterface } from '../../data/TaskInterface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: TaskInterface[] = TASKS
}
