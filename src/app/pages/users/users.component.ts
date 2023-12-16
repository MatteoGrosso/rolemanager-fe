import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[]= [];
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  resetPassword(index: number): void{
    this.userService.resetUserPasswordById(this.users[index].username).subscribe({
      next: () => {
        console.log("Password set to 0000");
        this.getUsers();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

}
