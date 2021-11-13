import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTodoFromTitle } from 'src/app/ngrx/selectors';
import { add, replace } from 'src/app/ngrx/todo.actions';
import { Todo } from 'src/app/ngrx/todo.reducer';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
    orig;
    todoForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.maxLength(50)
        ]),
        description: new FormControl('', [
            Validators.maxLength(1000)
        ]),
        timeInMin: new FormControl('', [
            Validators.required
        ]),
        instructions: new FormControl('', [
            Validators.required
        ]),
        status: new FormControl('', [
            Validators.required
        ]),
    });

    constructor(private router: Router, private route: ActivatedRoute, private store: Store<{ todos: Todo[] }>) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params['title']) { 
                this.store.select(selectTodoFromTitle(params['title'])).subscribe((item) => {
                    this.orig = item[0];
                    this.todoForm.setValue({
                        title: item[0].title,
                        description: item[0].description,
                        timeInMin: item[0].timeInMin,
                        instructions: item[0].instructions,
                        status: item[0].completed ? "completed": "open"
                    });
                })
            }
        });
    }

    submit() {
        if (this.todoForm.valid) {
            const form = this.todoForm.getRawValue();
            const todo: Todo = {
                title: form.title,
                description: form.description,
                timeInMin: form.timeInMin,
                instructions: form.instructions,
                completed: form.status === "completed" ? true : false
            }

            if (this.orig) {
                this.store.dispatch(replace({ orig: this.orig, todo }));
            } else {
                this.store.dispatch(add({ todo }));
            }

            this.router.navigate([`todo`]);
        }
    }

}
