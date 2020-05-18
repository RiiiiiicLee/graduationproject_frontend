import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-forumdetail',
  templateUrl: './forumdetail.component.html',
  styleUrls: ['./forumdetail.component.css']
})
export class ForumdetailComponent implements OnInit {

  public forumlist: any;
  private forumid:number=this.ActivatedRoute.snapshot.params.forumid;

  constructor(
    private HttpClient:HttpClient,
    private Router:Router,
    private ActivatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showForumDetail();
  }

  showForumDetail() {
    this.HttpClient.post('http://localhost:8080/forum/detail',this.forumid)
      .toPromise().then(data => {
        console.log(data)
        this.forumlist = data
      }).catch(err => {
        console.log(err)
      })
  }

  lockForumdetailByid(forumid: string,isLocked:number, e: any) {
    e.preventDefault();
    if(isLocked==1||isLocked==0){
      if (!window.confirm('确定锁定此回复吗？')) {
        return
      }
      isLocked=2;
    }else{
      if (!window.confirm('确定恢复此回复吗？')) {
        return
      }
      isLocked=0;
    }
    const lockForumdetailFormData={
      forumId:forumid,
      isLocked:isLocked,
    }
    this.HttpClient.post('http://localhost:8080/forum/report', lockForumdetailFormData)
      .toPromise()
      .then(data => {
        if (data !=null) {
          window.alert('成功')
          this.showForumDetail();
        }
        else {
          window.alert('失败')
        }
      })
      .catch(err => {
        window.alert('不可锁定')
      })
  }
}
