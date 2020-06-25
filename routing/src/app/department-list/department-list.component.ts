import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id: 1, name: 'React'},
    {id: 2, name: 'Bootstrap'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'Django'},
    {id: 5, name: 'Chakra UI'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
