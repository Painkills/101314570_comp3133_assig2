import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ADD_USER } from '../graphql/graphql.queries'
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-user-adding',
  templateUrl: './user-adding.component.html',
  styleUrls: ['./user-adding.component.css']
})
export class UserAddingComponent {
  user: any;
  error: any;
  addUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  addUser() {
    this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        username: this.addUserForm.value.username,
        email: this.addUserForm.value.email,
        password: this.addUserForm.value.password
      }
    }).subscribe({
      error: (error) => this.error = error,
      complete: () => {
        this.sharedService.setRefresh(true)
        this.addUserForm.reset();
      }
    })
  }

  constructor (
    private apollo: Apollo,
    private sharedService: SharedService
  ) {}
}
