import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RoutingExample2Component } from './routing-example-2/routing-example-2.component';

const routes: Routes = [
  { path :'' , component:AppComponent },
  { path :'routing-example' , component:RoutingExampleComponent },
  { path :'routing-example/:id' , component:RoutingExample2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

