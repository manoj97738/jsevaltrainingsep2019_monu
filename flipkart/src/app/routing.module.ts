import { NgModule } from "@angular/core";
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {   MadhurPipe} from "./mycustompipe";
const myRoute: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about-us', pathMatch: 'full', component: AboutusComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule), }, // lazy loading feature
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
]
@NgModule({
  declarations: [
    ContactComponent,
    AboutusComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    MadhurPipe
  ],
  imports: [
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingSampleModule {

}
