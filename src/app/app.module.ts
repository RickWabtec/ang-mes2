import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { HttpService } from './http.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }
