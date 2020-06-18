import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  employees = [
    {id: 1, name: 'Andrew', age: 30},
    {id: 2, name: 'Brandon', age: 25},
    {id: 3, name: 'Christina', age: 26},
    {id: 4, name: 'Elena', age: 28}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
