import { createSelector } from '@ngrx/store';
import { Todo } from './todo.reducer';

export interface AppState {
    todos: Todo[];
}

export const selectTodos = (state: AppState) => state.todos;

export const selectTodosOpen = createSelector(selectTodos, (todos: Todo[]) => {
    return todos.filter(todo => !todo.completed);
});

export const selectTodosCompleted = createSelector(selectTodos, (todos: Todo[]) => {
    return todos.filter(todo => todo.completed);
});

export const selectTodosLength = createSelector(selectTodos, (todos: Todo[]) => {
    return todos.length
});

export const selectTodoFromTitle = (title: string) => {
    return createSelector(selectTodos, (todos) => {
        return todos.filter(t => t.title === title);
    });
}