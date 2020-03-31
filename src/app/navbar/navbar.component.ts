import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string =window.localStorage.getItem('user_name')
  
  constructor(
    private Router: Router
  ) { }

  ngOnInit(): void {
    if(this.username == null){
      this.Router.navigate(['/']);
        }
  }

  logout(e){
    e.preventDefault();
    window.localStorage.removeItem('auth_token');
    window.localStorage.removeItem('user_name');
    this.Router.navigate(['/']);
    window.alert('已退出登录')
  }

  

}
