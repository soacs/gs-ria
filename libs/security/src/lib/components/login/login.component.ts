import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ria-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  public loginFailed: boolean;

  onSubmit() {
    this.loginFailed = false;
    if (this.loginForm.valid) {
      try {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        // const loggenInUser = this.authService.login(username, password);
      } catch (err) {
        this.loginFailed = true;
      }
    }
  }
}
