import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent,
    NgZorroAntdModule,
  ],

})
export class SharedModule { }
