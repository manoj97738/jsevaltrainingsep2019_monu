import { NgModule } from "@angular/core";
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupchildComponent } from './signupchild/signupchild.component';
import { SignupMinkyComponent } from '../signup-minky/signup-minky.component';
import { SignupPinkyComponent } from '../signup-pinky/signup-pinky.component';

const myRoute: Routes = [
  {
    path: '', component: SignupComponent, children: [
      { path: 'chotu', component: SignupchildComponent },
      { path: 'minky', component: SignupMinkyComponent },
      { path: 'pinky', component: SignupPinkyComponent }
    ]
  },
]
@NgModule({
  declarations: [
    SignupComponent,
    SignupchildComponent,
    SignupMinkyComponent,
    SignupPinkyComponent,
  ],
  imports: [
    RouterModule.forChild(myRoute),
  ],
  exports: [
    RouterModule
  ]
})
export class SignupModule {

}
