import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: `./test.component.html`,
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {

  public name = 'Satvik'
  public siteUrl = window.location.href

  public myID = 'testId'
  // Interpolation can only work with string values that's why we need [property binding]
  public isDisabled = true

  // Class Binding
  public successClass = 'text-success'
  public hasError = false
  public isSpecial = true
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  // Style Binding
  public highlightColor =  'orange'
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  public greeting = ''

  constructor() { }

  ngOnInit(): void {
  }

  greetUser = () => {
    return 'Hello ' + this.name
  }

  onClick = (event: any) => {
    console.log(event)
    this.greeting = 'WELCOME TO HELL!!!'
  }

  inputtedValue = (event: any) => {
    console.log(event.target.value)
  }

  logMessage = (value: any) => {
    console.log(value)
  }
}
