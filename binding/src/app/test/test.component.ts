import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div class="interpolation">
      <h5>Welcome {{ name }}</h5>
      <h5>{{ 2 + 2 }}</h5>
      <h5>{{ "Welcome " + name }}</h5>
      <h5>{{ name.length }}</h5>
      <h5>{{ name.toUpperCase() }}</h5>
      <h5>{{ greetUser() }}</h5>
      <h5>{{ siteUrl }}</h5>
    </div>

    <div class="property-binding">
      <input bind-disabled='isDisabled' type="text" value="Ashish" />
      <input [disabled]='isDisabled' type="text" value="Ashish" />
      <input disabled='false' id='{{ myID }}' type="text" value="Ashish" />
    </div>

    <div>
      <h5 class="text-special">Ashish Padhi</h5>
      <h5 [class]="successClass">Varsha Sharma</h5>
      <h5 class="text-special" [class]="successClass">Varsha Sharma</h5>
      <h5 [class.text-danger]="hasError" >Varsha Sharma</h5>

      <h5 [ngClass]="messageClasses" >Varsha Sharma</h5>

    </div>
  `,
    // styleUrls: ['./test.component.scss'],
  styles: [`
    .property-binding {
      display: flex;
      flex-direction: column;
    }
    input {
      margin: 5px auto;
    }
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})

export class TestComponent implements OnInit {

  public name = 'Satvik'
  public siteUrl = window.location.href

  public myID = 'testId'
  // Interpolation can only work with string values that's why we need [property binding]
  public isDisabled = true

  // Class Binding
  public successClass = 'text-success'
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser = () => {
    return 'Hello ' + this.name
  }

}
