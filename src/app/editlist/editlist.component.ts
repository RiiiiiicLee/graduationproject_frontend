import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {


  formData :any= {
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
    private router : Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params.username;
    this.getEditUser(username);
  }

  getEditUser(username){
    this.httpclient.post('http://localhost:8080/user/showEdit',username)
    .toPromise()
    .then(data=>{
      this.formData=data;
    })
    .catch(err=>{
      console.log(err)
    })
  }

  editUser(){
    this.httpclient.post('http://localhost:8080/user/edit',this.formData)
    .toPromise()
    .then(data=>{
      console.log(data);
      this.router.navigate(['/list'])
      window.alert("用户"+this.formData.username+"已更新")
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }


}
