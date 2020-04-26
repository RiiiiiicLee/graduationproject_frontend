import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newgoods',
  templateUrl: './newgoods.component.html',
  styleUrls: ['./newgoods.component.css']
})
export class NewgoodsComponent implements OnInit {

  formData :any ={
    goodsname: '',
    goodsimg:'',
    sponsor: '',
    supplier: '',
    distributor:'',
    discount:'',
    goodsprice: '',
    goodsinfo: '',
    isdeleted:0,
    islocked:0
  }

  constructor(
    private httpclient :HttpClient,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  newGoods(){
    this.httpclient.post("http://localhost:8080/goods/new",this.formData)
    .toPromise()
    .then(data =>{
      console.log(data)
      this.router.navigate(['/goods'])
      window.alert("商品"+this.formData.goodsname+"已增加")
    })
    .catch(err=>{
      window.alert("新增商品失败")
    })

  }
}
