import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';

import { TodoStore } from './service/store.service';

@NgModule({
  declarations: [
    TodoApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TodoStore],
  bootstrap: [TodoApp]
})
export class AppModule { }
