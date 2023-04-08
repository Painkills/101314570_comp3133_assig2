import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Employee } from '../models/employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EDIT_EMP, GET_EMP_BY_ID } from '../graphql/graphql.queries'
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-emp-editing',
  templateUrl: './emp-editing.component.html',
  styleUrls: ['./emp-editing.component.css']
})


export class EmpEditingComponent {
  feedback: String = "";
  employee: any;
  error: any;
  editEmpForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

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
        this.setFormValues()
      });
    }
    
  }

  editEmp() {
    this.apollo.mutate({
      mutation: EDIT_EMP,
      variables: {
        id: this.employee.id,
        firstname: this.editEmpForm.value.firstname,
        lastname: this.editEmpForm.value.lastname,
        email: this.editEmpForm.value.email,
        gender: this.editEmpForm.value.gender,
        salary: this.editEmpForm.value.salary
      }
    }).subscribe({
      error: (error) => this.error = error,
      complete: () => {
        this.feedback = "Employee edited successfully."
        this.sharedService.setRefresh(true)
      }
    })
  }

  setFormValues() {
    this.editEmpForm.setValue({
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
    this.loadData("0")
    this.sharedService.getEmpId().subscribe((value: string) => {
      if(value != "0") {
        this.loadData(value)
        this.sharedService.setEmpId("0")
      }
    })
  }
}
