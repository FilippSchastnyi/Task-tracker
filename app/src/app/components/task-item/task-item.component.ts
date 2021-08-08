import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  // @ts-ignore
  @Input() task : Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>()

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.onDeleteTask.emit();
  }
}
