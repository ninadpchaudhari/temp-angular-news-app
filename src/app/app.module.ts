import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import {FormsModule} from '@angular/forms';
import { ParamComponentComponent } from './param-component/param-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ParamComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
