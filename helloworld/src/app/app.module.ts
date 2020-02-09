import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SHaktimaanComponent } from "./shaktimaan";
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from './notfound/notfound.component';
const myroute: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: NotfoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SHaktimaanComponent,
    ContactComponent,
    AboutusComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
