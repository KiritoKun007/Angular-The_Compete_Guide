import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<p>
              Inline Template
            </p>` ,
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  styles: [`
    p {
      color: red
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
