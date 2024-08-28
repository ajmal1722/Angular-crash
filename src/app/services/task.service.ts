import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TaskInterface } from '../data/TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks (): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl)
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface> {
    console.log('delete button clicked')
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<TaskInterface>(url)
  }
}