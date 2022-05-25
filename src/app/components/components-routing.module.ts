import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
        import('./authentication/authentication.module').then(
            mod => mod.AuthenticationModule
        )
  },
  {path:'',
  component: LayoutComponent,
  loadChildren:()=>import('./pages/pages.module')
  .then(m=>m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
