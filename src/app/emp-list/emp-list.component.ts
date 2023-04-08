import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Employee } from '../models/employee';
import { GET_ALL_EMPS } from '../graphql/graphql.queries'
import { SharedService } from '../shared/SharedService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  searchText = '';
  error: any;
  employeeList: any;

  private loadData() {
    this.apollo.watchQuery({
      query: GET_ALL_EMPS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.employeeList = data.getEmployees as Employee[];
      this.error = error
    });
  }

  public sendEmpId(empId:string) {
    this.sharedService.setEmpId(empId)
  }

  constructor (
    private apollo: Apollo,
    private sharedService: SharedService,
    private router: Router
  ) {}

  showEmp() {
    this.router.navigate(['empDetails'], { skipLocationChange: true });
  }

  ngOnInit() {
    this.loadData()
    this.sharedService.getRefresh().subscribe((value: boolean) => {
      if(value) {
        this.loadData()
        this.sharedService.setRefresh(false)
      }
    })
  }
}