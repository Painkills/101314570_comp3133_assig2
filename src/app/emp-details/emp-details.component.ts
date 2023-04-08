import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Employee } from '../models/employee';
import { GET_ALL_EMPS, DELETE_EMP, GET_EMP_BY_ID } from '../graphql/graphql.queries'
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  error: any;
  employee: any;

  loadData(empId: string) {
    if (empId == "0") {
      this.employee = "0";
    } else {
      this.apollo.watchQuery({
        query: GET_EMP_BY_ID,
        variables: {
          id: empId
        }
      }).valueChanges.subscribe(({ data, error }: any) => {
        this.employee = data.getEmployeeByID as Employee;
        this.error = error
      });
    }
    
  }

  deleteEmp() {
    this.apollo.mutate({
      mutation: DELETE_EMP,
      variables: {
        id: this.employee.id,
      },
      refetchQueries: [{
        query: GET_ALL_EMPS
      }]
    }).subscribe({
      error: (error) => this.error = error,
      complete: () => {
        this.sharedService.setRefresh(true)
        this.sharedService.setEmpId("0")
      }
    })
    this.sharedService.setRefresh(true)
  }

  constructor (
    private apollo: Apollo,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.loadData("0")
    this.sharedService.getEmpId().subscribe((value: string) => {
      if(value != "0") {
        this.loadData(value)
        this.sharedService.setEmpId("0")
      }
    })
  }
}
