import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
    {
		path: '',
        pathMatch: 'full',
		redirectTo: '/todo'
	},
    {
		path: 'todo',
		component: TodoComponent,
	},
    {
		path: 'todo-add',
		component: TodoAddComponent,
	},
    {
		path: 'todo-add/:title',
		component: TodoAddComponent,
	},
	{
		path: '**',
		redirectTo: '/404'
	},
	{
		path: '404',
		component: NotFoundComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
