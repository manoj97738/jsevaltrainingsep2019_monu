import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Users = [];
  profileForm = new FormGroup({
    email: new FormControl('initial value you wish to set', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }
  myfunction() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value)
      this.Users.push(this.profileForm.value)
      this.profileForm.reset();
    } else {
      alert('Bhai Value enter kar')
    }

  }
}
