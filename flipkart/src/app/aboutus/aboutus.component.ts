import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  formAbout: FormGroup;
  submitted = false;
  constructor(public http: HttpClient) {
    this.formAbout = new FormGroup({
      name: new FormControl('initialvalue', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(50)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      email: new FormControl('initialvalue', [Validators.required, Validators.email])
    })
  }
  get name() {
    return this.formAbout.get('name')
  }
  get age() {
    return this.formAbout.get('age')
  }
  get phone() {
    return this.formAbout.get('phone')
  }
  get email() {
    return this.formAbout.get('email')
  }
  errors(controlName) {
    const controlNameRef = this.formAbout.get(controlName);
    if (controlNameRef.errors && this.submitted) {
      if (controlNameRef.errors.required) {
        return 'this filed is required';
      }
      if (controlNameRef.errors.email) {
        return 'this is not a valid email';
      }
      if (controlNameRef.errors.minLength) {
        return `this field must be ${controlNameRef.errors.minlength.requiredLength}}`;
      }
      if (controlNameRef.errors.maxLength) {
        return `this field must be ${controlNameRef.errors.maxlength.requiredLength}}`;
      }
      if (controlNameRef.errors.min) {
        return `this field must be ${controlNameRef.errors.min.requiredLength}}`;
      }
      if (controlNameRef.errors.max) {
        return `this field must be ${controlNameRef.errors.max.requiredLength}}`;
      }
      if (controlNameRef.errors.pattern) {
        return `this field must be ${controlNameRef.errors.max.requiredLength}}`;
      }
    }
  }
  ngOnInit() {
  }
  submit() {
    this.submitted = true;
    console.log(this.formAbout);
    if (this.formAbout.valid) {
      this.http.post("https://jsonplaceholder.typicode.com/posts", this.formAbout.value).subscribe(
        (data) => {
          console.log(data)
        },
        (erro) => {

        },
        () => {

        }
      )
    } else {
      alert('Please enter value')
    }

  }
}
