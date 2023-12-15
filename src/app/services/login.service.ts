import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsDTO } from '../dto/credentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerURL= "http://localhost:8080" //todo astrazione
  
  constructor(private http: HttpClient) { }

  public checkLogin(user: CredentialsDTO): Observable<boolean>{
    return this.http.post<boolean>(`${this.apiServerURL}/user/login`, user)
  }

}
