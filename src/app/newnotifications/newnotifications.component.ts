import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newnotifications',
  templateUrl: './newnotifications.component.html',
  styleUrls: ['./newnotifications.component.css']
})
export class NewnotificationsComponent implements OnInit {

  formData :any ={
    noticontent:'',
    notiimgname:'',
    notiname:'',
    notiimgurl:'',
    isdeleted:0
  }

  constructor(
    private httpclient :HttpClient,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  newNotification(){
    this.httpclient.post("http://localhost:8080/notification/new",this.formData)
    .toPromise()
    .then(data =>{
      console.log(data)
      this.router.navigate(['/notification'])
      window.alert("新闻&公告"+this.formData.notiname+"已增加")
    })
    .catch(err=>{
      window.alert("新增新闻&公告失败")
    })
  }

}
