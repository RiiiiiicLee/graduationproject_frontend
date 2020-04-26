import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private Router:Router
  ) { }

  ngOnInit(): void {
  }

  gotoList(){
    this.Router.navigate(['/list'])
  }

  gotoGoods(){
    this.Router.navigate(['/goods'])
  }
  

}
