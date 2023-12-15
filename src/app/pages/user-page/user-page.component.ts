import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent{
  isReadOnlyMode= true;
  newPassword="";
  passwordComp="";
  user?: User

  constructor(private userService: UserService){
    const user= userService.getLoggedUser()
    if(user){
      this.user= user
    }
    
  }
  
  changeMode(){
    this.isReadOnlyMode= !this.isReadOnlyMode;
  }

  confirmPassword(){
    if(this.newPassword===this.passwordComp){
      if(this.user){
        this.user.password= this.passwordComp
        console.log(this.user)
        console.log(this.userService.getLoggedUser())
        debugger
        this.userService.setLoggedUser(this.user)
        this.userService.updateUser(this.user) //TODO testare update con postman
      }
      this.passwordComp=""
      this.changeMode()
    }
  }
}
