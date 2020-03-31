import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {

  formData = {
    username: '',
    password:'',
    tel: '',
    birthday: '',
    address: '',
    email: '',
    userstatus: '',
    isdeleted: '',
    islocked: ''
  }

  constructor(
    private httpclient :HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.httpclient.post("http://localhost:8080/user/new",this.formData)
    .toPromise()
    .then(data =>{
      console.log(data)
      this.router.navigate(['/list'])
    })
    .catch(err=>{
      window.alert("新建用户失败")
    })
  }
}
