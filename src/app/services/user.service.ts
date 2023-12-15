import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserID } from '../dto/userID';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerURL= "http://localhost:8080"
  private loggedUser?: User
  constructor(private http: HttpClient) { }

  public setLoggedUser(user: User){
    this.loggedUser= user
  }
  public getLoggedUser(): User | undefined{
    return this.loggedUser;
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerURL}/user/all`)
  }

  public getUserByUsername(username: string): Observable<User>{
    return this.http.post<User>(`${this.apiServerURL}/user/find`, username)
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerURL}/user/add`, user)
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerURL}/user/update`, user)
  }

  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/user/delete/${userId}`)
  }

  public resetUserPasswordById(user: UserID): Observable<void>{
    return this.http.post<void>(`${this.apiServerURL}/user/reset`, user)
  }

}
