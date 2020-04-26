import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public notifications: any

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.showNoti();
  }

  showNoti() {
    this.http.get('http://localhost:8080/notification/list')
      .toPromise().then(data => {
        console.log(data)
        this.notifications = data
      }).catch(err => {
        console.log(err)
      })
  }

  deleteNotificationById(notificationid: string, e: any) {
    e.preventDefault();
    if (!window.confirm('确定删除新闻&通知' + notificationid + '吗？')) {
      return
    }
    this.http.post('http://localhost:8080/notification/delete', notificationid)
      .toPromise()
      .then(data => {
        if (data !=null) {
          window.alert('删除成功')
          this.showNoti();
        }
        else {
          window.alert('删除失败')
        }
      })
      .catch(err => {
        window.alert('不可删除')
      })
  }

}
