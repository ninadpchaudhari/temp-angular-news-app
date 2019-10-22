import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AppComponent } from './app.component';
import { ParamComponentComponent } from './param-component/param-component.component';


const routes: Routes = [
  {path:'news', component: NewsComponent},
  {path:'params/:id', component: ParamComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
