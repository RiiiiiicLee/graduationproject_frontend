import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorders',
  templateUrl: './editorders.component.html',
  styleUrls: ['./editorders.component.css']
})
export class EditordersComponent implements OnInit {

  formData :any=[{
    orderid:'',
    userid:'',
  }]

  constructor(
    private httpclient :HttpClient,
    private router : Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userid=this.activatedRoute.snapshot.queryParams["userid"];
    const orderid=this.activatedRoute.snapshot.queryParams["orderid"];
    console.log(userid,orderid);
    this.getEditOrder(userid,orderid);
  }

  getEditOrder(userid,orderid){
    let data={userid,orderid}
    this.httpclient.post('http://localhost:8080/salesrecord/showRecord',data)
    .toPromise()
    .then(data=>{
      this.formData=data;
      console.log(data);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  editOrder(){
    let address={
      userid:this.formData[0].userid,
      orderid:this.formData[0].orderid,
      addressname:this.formData[0].addressname,
      addressinfo:this.formData[0].addressinfo,
      tel:this.formData[0].tel,
    }
    console.log(address)
    this.httpclient.post('http://localhost:8080/salesrecord/edit',address)
    .toPromise()
    .then(data=>{
      console.log(data);
      window.alert("订单地址已更新")
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }

}
