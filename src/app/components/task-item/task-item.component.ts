import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../data/TaskInterface';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: TaskInterface
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<TaskInterface> = new EventEmitter();

  faTimes = faTimes;

  onDelete (task: TaskInterface) {
    this.onDeleteTask.emit(task)
  }

  onToggle (task: TaskInterface) {
    this.onToggleTask.emit(task)
  }
}
