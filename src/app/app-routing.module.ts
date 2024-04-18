import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RoutingExample2Component } from './routing-example-2/routing-example-2.component';

const routes: Routes = [
  { path :'' , component:AppComponent },
  { path :'routing-example' , component:RoutingExampleComponent },
  { path :'routing-example/:id/:title' , component:RoutingExample2Component }
  // above example above multiple router parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// to create a new routing module file ng g m  app-routing --module app --flat
// to create a new module file ng g m  app- --module app --flat
