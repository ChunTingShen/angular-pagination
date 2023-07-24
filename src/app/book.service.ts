import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  getTodos() {
    return this.http.get(this.todosUrl);
  }
}
