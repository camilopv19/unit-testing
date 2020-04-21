
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { catchError, map, retry } from 'rxjs/operators'

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo)
    .pipe(map(r => JSON.stringify(r)));
  }

  getTodos() { 
    return this.http.get('...')
    .pipe(map(r => [r]));
  }

  delete(id) {
    return this.http.delete('...')
    .pipe(map(r => JSON.stringify(r)));
  }
}