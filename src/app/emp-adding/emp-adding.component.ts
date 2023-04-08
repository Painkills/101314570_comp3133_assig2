import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ADD_EMP, GET_ALL_EMPS } from '../graphql/graphql.queries'
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-emp-adding',
  templateUrl: './emp-adding.component.html',
  styleUrls: ['./emp-adding.component.css']
})
export class EmpAddingComponent {
  employee: any;
  error: any;
  addEmpForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  addEmp() {
    this.apollo.mutate({
      mutation: ADD_EMP,
      variables: {
        firstname: this.addEmpForm.value.firstname,
        lastname: this.addEmpForm.value.lastname,
        email: this.addEmpForm.value.email,
        gender: this.addEmpForm.value.gender,
        salary: this.addEmpForm.value.salary
      },
      refetchQueries: [{
        query: GET_ALL_EMPS
      }]
    }).subscribe({
      error: (error) => this.error = error,
      complete: () => {
        this.sharedService.setRefresh(true)
        this.addEmpForm.reset();
      }
    })
  }

  setFormValues() {
    this.addEmpForm.setValue({
      firstname: this.employee.firstname,
      lastname: this.employee.lastname,
      email: this.employee.email,
      gender: this.employee.gender,
      salary: this.employee.salary
    });
  }

  constructor (
    private apollo: Apollo,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.getEmpId().subscribe((value: string) => {
      if(!value) {
        this.sharedService.setEmpId("0")
      }
    })
  }
}
