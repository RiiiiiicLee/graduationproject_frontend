import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editnotifications',
  templateUrl: './editnotifications.component.html',
  styleUrls: ['./editnotifications.component.css']
})
export class EditnotificationsComponent implements OnInit {

  formData :any ={
    noticontent:'',
    notiimgname:'',
    notiname:'',
    notiimgurl:'',
    isdeleted:''
  }

  constructor(
    private httpclient :HttpClient,
    private router : Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const notificationid = this.activatedRoute.snapshot.params.notificationid;
    this.getEditNotification(notificationid);
  }

  getEditNotification(notificationId){
    this.httpclient.post('http://localhost:8080/notification/showNotifications',notificationId)
    .toPromise()
    .then(data=>{
      this.formData=data;
      console.log(this.formData);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  editNotification(){
    console.log(this.formData)
    this.httpclient.post('http://localhost:8080/notification/edit',this.formData)
    .toPromise()
    .then(data=>{
      console.log(data);
      this.router.navigate(['/notification'])
      window.alert("新闻&通知"+this.formData.notiname+"已更新")
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }


}
