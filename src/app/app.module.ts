import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { LayoutComponent } from './layout/layout.component';
import { EditlistComponent } from './editlist/editlist.component';
import { NewlistComponent } from './newlist/newlist.component';
import { GlobalHttpInterceptor } from './global.interceptor';
import { GoodsComponent } from './goods/goods.component';
import { EditgoodsComponent } from './editgoods/editgoods.component';
import { NewgoodsComponent } from './newgoods/newgoods.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewnotificationsComponent } from './newnotifications/newnotifications.component';
import { EditnotificationsComponent } from './editnotifications/editnotifications.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    ShowlistComponent,
    LayoutComponent,
    EditlistComponent,
    NewlistComponent,
    GoodsComponent,
    EditgoodsComponent,
    NewgoodsComponent,
    NotificationsComponent,
    NewnotificationsComponent,
    EditnotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
