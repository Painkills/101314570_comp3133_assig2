import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloModule } from 'apollo-angular';
import { EmpListComponent } from './emp-list/emp-list.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpEditingComponent } from './emp-editing/emp-editing.component';
import { EmpAddingComponent } from './emp-adding/emp-adding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddingComponent } from './user-adding/user-adding.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
    EmpEditingComponent,
    EmpAddingComponent,
    UserAddingComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    ApolloModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
