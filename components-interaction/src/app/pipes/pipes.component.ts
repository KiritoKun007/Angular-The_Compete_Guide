import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent implements OnInit {

  name = 'Zodiac0606'
  message = 'Welcome to angular playground!!'
  person = {
    firstName: 'Ashish',
    lastName: 'Padhi'
  }

  date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
