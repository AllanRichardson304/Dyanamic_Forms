import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgZorroAntdModule,
    SharedModule
  ]
})
export class ComponentsModule { }
