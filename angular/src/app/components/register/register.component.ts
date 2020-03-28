import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      usename: this.username,
      password: this.password
    }
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


  }
}
