import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { Task2Component } from './task2/task2.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { AppendPipe } from './Pipes/append.pipe';
import { ArgumentpipecliPipe } from './Pipes/argumentpipecli.pipe';
import { PostComponent } from './post/post.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    DirectiveExamplesComponent,
    Task2Component,
    PipesExamplesComponent,
    AppendPipe,
    ArgumentpipecliPipe,
    PostComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
