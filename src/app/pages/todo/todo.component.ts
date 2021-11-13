import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, markActive, markCompleted, remove, reset, resetTo } from 'src/app/ngrx/todo.actions';
import { Todo } from 'src/app/ngrx/todo.reducer';
import { map } from 'rxjs/operators'
import { selectTodos } from 'src/app/ngrx/selectors';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    displayedColumns: string[] = ['title', 'description', 'timeInMin', 'instructions', 'status', 'actions'];
    todos$: Observable<any>;

    constructor(private router: Router, private http: HttpClient, private store: Store<{ todos: Todo[] }>) {
        this.todos$ = store.pipe(map(state => selectTodos(state)));
    }

    getDemoData() {
        this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res: any) => {
            const demoTodos: any[] = res;
            const todos: Todo[] = [];
            demoTodos.forEach((todo) => {
                todos.push({
                    title: todo.title,
                    description: '',
                    timeInMin: 1,
                    instructions: '',
                    completed: todo.completed
                });
            });
            this.store.dispatch(resetTo({ todos }));
        });
    }

    add() {
        const todo: Todo = {
            title: 'asdasdasd',
            description: '',
            timeInMin: 1,
            instructions: '',
            completed: false
        }
        this.store.dispatch(add({ todo }));
    }

    done(todo: Todo) {
        this.store.dispatch(markCompleted({ todo }));
    }

    undo(todo: Todo) {
        this.store.dispatch(markActive({ todo }));
    }

    edit(todo: Todo) {
        this.router.navigate([`todo-add/${encodeURIComponent(todo.title)}`, todo]);
    }

    remove(todo: Todo) {
        this.store.dispatch(remove({ todo }));
    }

    reset() {
        this.store.dispatch(reset());
    }

}
