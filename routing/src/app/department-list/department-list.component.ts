import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  selectedId: any

  departments = [
    {id: 1, name: 'React'},
    {id: 2, name: 'Bootstrap'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'Django'},
    {id: 5, name: 'Chakra UI'}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      console.log(params)
     let id = parseInt(params.get('id'))

     this.selectedId = id
    })
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], { relativeTo: this.route })
  }

  isSelected(department: any) {
    return department.id === this.selectedId
  }

}
