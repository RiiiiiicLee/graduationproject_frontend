import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  public users: any

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.showlist();
  }

  showlist(){
    this.http.get('http://localhost:8080/user/list')
      .toPromise().then(data => {
        console.log(data)
        this.users = data
      }).catch(err => {
        console.log(err)
      })
  }

  deleteUserByName(username:string,e:any){
    e.preventDefault();
    if(!window.confirm('确定删除用户'+username+'吗？')){
      return 
    }
    this.http.post('http://localhost:8080/user/delete',username)
    .toPromise()
    .then(data=>{
      if(data = true){
        window.alert('删除成功')
        this.showlist();
      }
      else{
        window.alert('删除失败')
      }
    })
    .catch(err=>{
      window.alert('不可删除自己')
    })
  }

}
