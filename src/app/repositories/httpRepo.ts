import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TodoListModel} from '../models/todoListModel';
import {RESTService} from '../services/REST.service';
import {BaseHttpRepo} from './BaseHttpRepo';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpRepo extends BaseHttpRepo {
  constructor(private restService: RESTService, private httpClient: HttpClient) {
    super('todoList/');
  }

  getData(): Observable<TodoListModel[]> {
    return this.httpClient.get<TodoListModel[]>(this.restService.URL + super.url);
  }
}
