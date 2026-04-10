import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
const API = "http://localhost:3000"
interface ILoginResponse {
    username: string,
    email: string
    password: string
}
interface ILoginResponse{
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
  login(payload:ILoginResponse){
    return this.http.post<ILoginResponse>(API + "/login", payload).pipe(tap((res: ILoginResponse) =>{
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('user', JSON.stringify(res.user));
    } ))
  }
  register(payload:ILoginResponse){
    return this.http.post("http://localhost:3000/register",payload)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    return !!this.getToken();
  }
}
