import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.reducer';

export const add = createAction('[Todo Component] Add', props<{todo: Todo}>());
export const replace = createAction('[Todo Component] Replace', props<{todo: Todo, orig: any}>());
export const markCompleted = createAction('[Todo Component] MarkCompleted', props<{todo: Todo}>());
export const markActive = createAction('[Todo Component] MarkActive', props<{todo: Todo}>());
export const remove = createAction('[Todo Component] Remove', props<{todo: Todo}>());
export const reset = createAction('[Todo Component] Reset');
export const resetTo = createAction('[Todo Component] ResetTo', props<{todos: Todo[]}>());