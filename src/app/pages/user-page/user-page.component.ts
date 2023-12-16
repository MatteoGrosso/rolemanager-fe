import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  isReadOnlyMode = true;
  newPassword = '';
  passwordComp = '';
  user?: User;

  constructor(private userService: UserService) {
    const user = userService.getLoggedUser();
    if (user) {
      this.user = user;
    }
  }

  changeMode() {
    this.isReadOnlyMode = !this.isReadOnlyMode;
  }

  confirmPassword() {
    if (this.newPassword === this.passwordComp) {
      if (this.user) {
        this.user.password = this.passwordComp;
        this.userService.setLoggedUser(this.user);
        this.userService.updateUser(this.user).subscribe({
          next: (response: User) => {
            console.log(response);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
          },
        });
      }
      this.passwordComp = '';
      this.changeMode();
    }
  }
}
