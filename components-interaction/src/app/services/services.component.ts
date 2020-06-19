import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  employees = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data )
  }

}
