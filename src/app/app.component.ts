import { Component } from '@angular/core';
import { AuthService } from './shared/AuthService';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userStatus: boolean = false;
  title = '101314570_comp3133_assig2';

  constructor (
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout()
    console.log("logged out")
  }

  ngOnInit() {
    this.authService.getUserStatus().subscribe((value: boolean) => {
      this.userStatus = value
    })
  }
}
