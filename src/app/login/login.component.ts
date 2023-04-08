import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LOGIN_USER } from '../graphql/graphql.queries'
import { AuthService } from '../shared/AuthService';
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  feedback: String = "";
  error: any;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login() {
    this.apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
    }).subscribe({
      error: (error) => this.error = error,
      complete: () => {
        this.feedback = "You have logged in successfully."
        this.authService.login(this.loginForm.value.username!)
        this.sharedService.setRefresh(true)
        this.loginForm.reset();
      }
    })
  }

  constructor (
    private apollo: Apollo,
    private authService: AuthService,
    private sharedService: SharedService
  ) {}
}
