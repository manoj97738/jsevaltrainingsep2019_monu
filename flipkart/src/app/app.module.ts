import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingSampleModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
