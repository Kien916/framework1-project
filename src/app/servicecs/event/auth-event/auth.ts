import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http://localhost:3000/"
interface IAuthPayLoad {
    username: string,
    email: string
    password: string
}
interface IAuthResponse{
  user:{
    email: string,
    id:number
  }
  accessToken: string
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private http: HttpClient
  ){}
  register(payload:IAuthPayLoad){
    return this.http.post(API + "/register",payload)
  }
}
