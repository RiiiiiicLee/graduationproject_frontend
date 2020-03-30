import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm ={
    username: '',
    password: ''
  }

  constructor(
    private http:HttpClient,
    private Router: Router
    ) { 
  }

  ngOnInit(): void {
    
  }
  
  login(){
    const formData = this.loginForm;
    console.log(formData);
    this.http.post('http://192.168.0.104:8080/login',formData).toPromise().then(data => {
      console.log(data)
      this.Router.navigate(['/list'])
    }).catch(err => {
      console.log(err)
      window.alert("用户名或密码错误！")
    }

    )
  }

}
