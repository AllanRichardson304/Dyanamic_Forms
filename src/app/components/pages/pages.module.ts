import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { PagesRoutingModule } from './pages-routing.module';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule
  ]
})
export class PagesModule { }
