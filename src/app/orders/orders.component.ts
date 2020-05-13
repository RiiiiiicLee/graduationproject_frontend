import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: any = []
  public salesrecord: any

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.showlist();
  }

  showlist() {
    this.http.get('http://localhost:8080/salesrecord/all')
      .toPromise().then(data => {
        // console.log(data)
        this.salesrecord = data;
        this.salesrecord.forEach((val, index, record) => {
          let ordercount=0;
          let orderid = this.salesrecord[index]["orderid"];
          let userid = this.salesrecord[index]["userid"];
          this.orders.forEach((val, index, order) => {
            if(this.orders[index]["userid"]==userid && this.orders[index]["orderid"]==orderid){
              ordercount++;
            }
          });
          let addressinfo = this.salesrecord[index]["addressinfo"];
          let addressname = this.salesrecord[index]["addressname"];
          let tel = this.salesrecord[index]["tel"];
          let isdeleted=this.salesrecord[index]["isdeleted"];
          let rec = {
            orderid,
            userid,
            addressinfo,
            addressname,
            tel,
            isdeleted
          }
          if(ordercount==0){
            this.orders.push(rec);
          }
        });
        console.log(this.orders);
      }).catch(err => {
        console.log(err)
      })
  }

  deleteordersById(userid:string,orderid: string,isdeleted:number, e: any) {
    e.preventDefault();
    let deleteData={
      userid:userid,
      orderid:orderid,
      isdeleted:isdeleted
    }
    this.http.post('http://localhost:8080/salesrecord/admindelete', deleteData)
      .toPromise()
      .then(data => {
        if (data != null) {
          window.alert('成功')
          location.reload();
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
