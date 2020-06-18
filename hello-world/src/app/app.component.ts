import { Component } from '@angular/core';

// Decorator
@Component({
  // Contains Metadata  
  selector: 'app-root', // Select Custom HTML Tag to render the below template
  templateUrl: './app.component.html', // It a template that represents the view of the App Component
  styleUrls: ['./app.component.css']
})

// AppComponent Class
export class AppComponent {
  title = 'Zodiac0606';
}
