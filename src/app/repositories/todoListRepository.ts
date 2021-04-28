import {HttpRepo} from './httpRepo';
import {from, Observable} from 'rxjs';
import {TodoListModel} from '../models/todoListModel';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoListRepository {
  private staticContent: TodoListModel[] = [
    new TodoListModel(1, 'Fisrt'),
    new TodoListModel(2, 'Second', true)
  ];

  constructor(private httpRepo: HttpRepo) {
  }

  getData(): Observable<TodoListModel[]> {
    try {
      /*const data = this.httpRepo.getData().subscribe(() => {
        const a = 0;
      });*/
      throw new Error('');
    } catch (e) {
      return from([this.staticContent]);
    }
  }

  setDone(id: number, checked: boolean): void {
    this.staticContent.find(x => x.id === id).done = checked;
  }

  delete(id: number): void {
    this.staticContent = this.staticContent.filter(x => x.id !== id);
  }
}
