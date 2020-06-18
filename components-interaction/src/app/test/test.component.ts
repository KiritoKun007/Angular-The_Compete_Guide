import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {  

  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent = () => {
    this.childEvent.emit('Hey KiritoKun007 :)')
  }

}
