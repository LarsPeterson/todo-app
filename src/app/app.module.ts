import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { Todo, todoReducer } from './ngrx/todo.reducer';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { metaReducers } from './ngrx/meta-reducers';

interface IState {
    todos: Todo[];
}

const reducers: ActionReducerMap<IState> = {
    todos: todoReducer
};

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        NotFoundComponent,
        TodoAddComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(
            reducers,
            { metaReducers }
        ),
        MatTableModule,
        MatInputModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
