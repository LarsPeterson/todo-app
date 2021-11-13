import { createReducer, on } from '@ngrx/store';
import { add, markActive, markCompleted, remove, replace, reset, resetTo } from './todo.actions';

export interface Todo {
    title: string;
    description?: string;
    timeInMin: number;
    instructions: string;
    completed: boolean;
}

let todoCache = localStorage['todos'];
if (todoCache) {
    todoCache = JSON.parse(localStorage['todos']);
}

export const initialState: Todo[] = todoCache || [];

const _todoReducer = createReducer(
    initialState,
    on(add, (state, action) => {
        const s = deepClone(state);
        s.push(action.todo);
        return s;
    }),
    on(markCompleted, (state, action) => {
        const s = deepClone(state);
        const index = s.findIndex((todo) => {
            return todo.title === action.todo.title
        });

        s[index].completed = true;
        return s;
    }),
    on(markActive, (state, action) => {
        const s = deepClone(state);
        const index = s.findIndex((todo) => {
            return todo.title === action.todo.title
        });

        s[index].completed = false;
        return s;
    }),
    on(remove, (state, action) => {
        const s = deepClone(state);
        const index = s.findIndex((todo) => {
            return todo.title === action.todo.title
        });

        s.splice(index, 1);
        return s;
    }),
    on(replace, (state, action) => {
        const s = deepClone(state);
        const index = s.findIndex((todo) => {
            return todo.title === action.orig.title
        });

        s[index] = action.todo;
        return s;
    }),
    on(reset, (state, action) => {
        return [];
    }),
    on(resetTo, (state, action) => {
        return action.todos;
    })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

export function deepClone(obj: any[]): any[] {
    return JSON.parse(JSON.stringify(obj));
}