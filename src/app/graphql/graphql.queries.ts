import { gql } from "apollo-angular"

const GET_ALL_EMPS = gql`
    query getAllEmps {
        getEmployees {
            id
            email
            firstname
            lastname
            gender
            salary
        }
    }
`

const GET_EMP_BY_ID = gql`
    query getEmpById ($id: String!) {
        getEmployeeByID(id: $id){
            id
            firstname
            lastname
            email
            gender
            salary
        }
    }
`

const ADD_EMP = gql`
    mutation addEmp (
        $firstname: String!
        $lastname: String!
        $email: String!
        $gender: String!
        $salary: Float!
    ) {
        addEmployee(
            firstname: $firstname
            lastname: $lastname
            email: $email
            gender: $gender
            salary: $salary            
        ) {
        firstname
        lastname
        email
        gender
        salary
        }
    }
`

const EDIT_EMP = gql`
    mutation editEmp (
        $id: String!
        $firstname: String!
        $lastname: String!
        $email: String!
        $gender: String!
        $salary: Float!
    ){
        updateEmployee(
            id: $id
            firstname: $firstname
            lastname: $lastname
            email: $email
            gender: $gender
            salary: $salary            
        ) {
        id
        firstname
        lastname
        email
        gender
        salary
        }
    }
`

const DELETE_EMP = gql`
    mutation deleteEmp ($id: String!) {
        deleteEmployee(id: $id)
    }
`

const ADD_USER = gql`
    mutation addUser (
        $username: String!
        $email: String!
        $password: String!
    ) {
    register(
      username: $username
      email: $email
      password: $password
    ) {
      username
      email
      password
    }
  }
`

const LOGIN_USER = gql`
    query login (
        $username: String!
        $password: String!
    ) {
        login(
        username: $username
        password: $password
    ) {
        username
    }
    }
`
export {GET_ALL_EMPS, GET_EMP_BY_ID, ADD_EMP, EDIT_EMP, DELETE_EMP, ADD_USER, LOGIN_USER}


