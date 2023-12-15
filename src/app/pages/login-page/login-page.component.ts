import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsDTO } from 'src/app/dto/credentialsDTO';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {}

  checkLogin(): void {
    const userToCheck = new CredentialsDTO(this.username, this.password);
    this.loginService.checkLogin(userToCheck).subscribe({
      next: (loginResponse: boolean) => {
        if (loginResponse) {
          this.userService.getUserByUsername(userToCheck.username).subscribe({
            next: (response: User) => {
              this.userService.setLoggedUser(response)
              this.router.navigate(['user-page']);
            },
            error: (error: HttpErrorResponse) => {
              console.log(error);
            },
          });
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
