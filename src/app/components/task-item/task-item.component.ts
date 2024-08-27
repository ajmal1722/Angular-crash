import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../data/TaskInterface';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: TaskInterface
}
