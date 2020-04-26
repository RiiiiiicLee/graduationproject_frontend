import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ShowlistComponent} from './showlist/showlist.component';
import {NewlistComponent} from './newlist/newlist.component';
import {EditlistComponent} from './editlist/editlist.component';
import { GoodsComponent } from './goods/goods.component';
import { EditgoodsComponent } from './editgoods/editgoods.component';
import { NewgoodsComponent } from './newgoods/newgoods.component';
import { compileComponentFromMetadata } from '@angular/compiler';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewnotificationsComponent } from './newnotifications/newnotifications.component';
import { EditnotificationsComponent } from './editnotifications/editnotifications.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'list',
    component: LayoutComponent,
    children:[
      {
      path: '',
      component: ShowlistComponent
    },
    {
      path: 'new',
      component: NewlistComponent
    },
    {
      path: 'edit/:username',
      component: EditlistComponent
    }
  ]
  },
  {
    path:'goods',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:GoodsComponent
      },
      {
        path:'new',
        component:NewgoodsComponent
      },
      {
        path:'edit/:goodsid',
        component:EditgoodsComponent
      }
    ]
  },
  {
    path:'notification',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:NotificationsComponent
      },
      {
        path:'new',
        component:NewnotificationsComponent
      },
      {
        path:'edit/:notificationid',
        component:EditnotificationsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
