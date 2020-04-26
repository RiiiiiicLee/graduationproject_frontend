import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  public goods: any

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.showlist();
  }

  showlist() {
    this.http.get('http://localhost:8080/goods/list/')
      .toPromise().then(data => {
        console.log(data)
        this.goods = data
      }).catch(err => {
        console.log(err)
      })
  }

  deleteGoodsById(goodsid: string, e: any) {
    e.preventDefault();
    if (!window.confirm('确定删除商品吗？')) {
      return
    }
    this.http.post('http://localhost:8080/goods/delete', goodsid)
      .toPromise()
      .then(data => {
        if (data !=null) {
          window.alert('删除成功')
          this.showlist();
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
