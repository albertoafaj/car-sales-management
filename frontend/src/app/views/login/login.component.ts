import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    this.requestLogin = new RequestLogin();
  }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public login(): void {
    this.loginService.login(this.requestLogin).subscribe(
      (data) => {
        console.log(data);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
      }
    )
  }

}
