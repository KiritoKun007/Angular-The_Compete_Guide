import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  displayName = true

  color = 'orange'

  colors = [
    'red', 'blue', 'green', 'yellow'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
