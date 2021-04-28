import {Component, Input, OnInit} from '@angular/core';
import {TodoListRepository} from '../repositories/todoListRepository';
import {TodoListModel} from '../models/todoListModel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() admin;

  constructor(private todoListRepo: TodoListRepository) {
  }

  getData(): Observable<TodoListModel[]> {
    console.log('get data');
    return this.todoListRepo.getData();
  }

  ngOnInit(): void {
  }

  setDone(element: TodoListModel, $event): void {
    this.todoListRepo.setDone(element.id, $event.target.checked);
  }

  delete(item: TodoListModel): void {
    this.todoListRepo.delete(item.id);
  }
}
