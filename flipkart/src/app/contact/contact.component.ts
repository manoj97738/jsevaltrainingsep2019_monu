import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = "Madhur is A GoOd BOY";
  salary =  10205205.2525;
  birthday=new Date();
  constructor() { }

  ngOnInit() {
  }

}
