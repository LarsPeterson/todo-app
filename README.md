# ToDo App Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2 and implements `@ngrx/store`

## How to Run Locally

```
git clone <CLONE_URL>
```
```
npm i
```
```
npm start
```

## How to Test Production Locally

```
npm run build:prod
```
```
pm2 serve dist/todo-app --spa --no-daemon 
```

## How to Reproduce This Project
command line
```
ng new todo-app
ng g c pages/todo
ng g c pages/todo-add
ng g c pages/not-found
ng add @ngrx/store@latest
ng add @angular/material
ng add @ng-bootstrap/ng-bootstrap@next
```

tsconfig.json
```
"noImplicitAny": false
```

## Useful Documentation

https://ngrx.io/guide/store

https://github.com/btroncone/ngrx-store-localstorage

https://ng-bootstrap.github.io/#/components/

https://material.angular.io/components/categories

## Types/Interfaces

```
interface Todo {
    id: number;
    title: string;
    description?: string;
    timeInMin: number;
    instructions: string;
    completed: boolean;
}
```

## Project Acceptance

Functional Requirements:
- Create the list todos page ✓
- Create the add todo page ✓
- Create navigation between pages ✓


Data Requirements

- title, required, max 50 characters ✓
- description, optional, max 1000 characters ✓
- timeInMin, required, between 1 and 360 ✓
- instructions, required  ✓

Deliverables:
- A short description of how to build, deploy, and run your application. ✓
- Everything we need to build, deploy, and run your project, including source code, images, templates, build scripts. ✓
- Any other resources needed to build and run your application. ✓

Extra Credit
- Check your code into Bitbucket or Git ✓
- Host a working version in the cloud and give us the URL ✓
- Implement pub/sub pattern for todo items (using rxjs) ✓
- Make your application server-side rendered (dev server will be enough to demonstrate its work). As a bonus pack it in Docker container ❌
- Utilise a WYSIWYG editor for editing to-dos ❌
- You will need to implement basic memory cache (using rxjs) for such calls with possibility to clear it in particular cases ✓