import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    adminname: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private Router: Router
  ) {
  }

  ngOnInit(): void {

  }

  login() {
    const formData = this.loginForm;
    this.http.post('http://localhost:8080/admin/login', formData).toPromise().then((data: any) => {
      window.localStorage.setItem('auth_token', data.Token)
      window.localStorage.setItem('user_name', data.Admin.adminname)
      console.log(data)
      this.Router.navigate(['/list'])
    }).catch(err => {
      console.log(err)
      window.alert("用户名或密码错误！")
    }
    )
  }

  forgetPassword(e){
    e.preventDefault();
    window.alert("请联系管理员！");
  }

}
