import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editgoods',
  templateUrl: './editgoods.component.html',
  styleUrls: ['./editgoods.component.css']
})
export class EditgoodsComponent implements OnInit {

  formData :any ={
    goodsname: '',
    goodsimg:'',
    sponsor: '',
    supplier: '',
    distributor:'',
    discount:'',
    goodsprice: '',
    goodsinfo: '',
    islocked: ''
  }
  

  constructor(
    private httpclient :HttpClient,
    private router : Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const goodsId = this.activatedRoute.snapshot.params.goodsid;
    this.getEditGoods(goodsId);
  }

  getEditGoods(goodsId){
    this.httpclient.post('http://localhost:8080/goods/showGoods',goodsId)
    .toPromise()
    .then(data=>{
      this.formData=data;
      console.log(this.formData);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  editGoods(){
    this.httpclient.post('http://localhost:8080/goods/edit',this.formData)
    .toPromise()
    .then(data=>{
      console.log(data);
      this.router.navigate(['/goods'])
      window.alert("商品"+this.formData.goodsname+"已更新")
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }

}
