import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employees = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
