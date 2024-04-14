import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { Task2Component } from './task2/task2.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { AppendPipe } from './Pipes/append.pipe';
import { ArgumentpipecliPipe } from './Pipes/argumentpipecli.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    DirectiveExamplesComponent,
    Task2Component,
    PipesExamplesComponent,
    AppendPipe,
    ArgumentpipecliPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
