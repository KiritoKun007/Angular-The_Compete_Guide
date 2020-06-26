import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  public  departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    console.log(this.route.pathFromRoot)
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.departmentId = id
    })
  }

  goPrevious() {
    let previousId = this.departmentId - 1
    // this.router.navigate(['/departments', previousId])
    this.router.navigate(['/departments-list', previousId])
  }

  goNext() {
    let nextId = this.departmentId + 1
    // this.router.navigate(['/departments', nextId])
    this.router.navigate(['/departments-list', nextId])
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null

    // this.router.navigate(['/departments', {id: selectedId}])
    this.router.navigate(
      ['../'], 
      {
        relativeTo: this.route , 
        queryParams: { 
          id: selectedId 
        }, 
        queryParamsHandling: 'merge' 
      })
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }

}
