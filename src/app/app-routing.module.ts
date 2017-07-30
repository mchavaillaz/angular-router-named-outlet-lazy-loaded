import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComponentModuleOneProxyComponent} from './component-module-one-proxy/component-module-one-proxy.component';

// Version with lazy loaded module one in named router outlet
// using proxy ( https://github.com/angular/angular/issues/12842 see response from UnwrittenFun commented on 6 Jan )
// Module two lazy loaded in router outlet
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'module-one',
    outlet: 'module-one-outlet',
    component: ComponentModuleOneProxyComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/module-one/module-one.module#ModuleOneModule'
      }
    ],
  },
  {path: 'module-two', loadChildren: 'app/module-two/module-two.module#ModuleTwoModule'}
];

// Version with lazy loaded modules with named route outlets
// const routes: Routes = [
//   {path: '', redirectTo: '', pathMatch: 'full'},
//   {path: 'module-one', outlet: 'module-one-outlet', loadChildren: 'app/module-one/module-one.module#ModuleOneModule'},
//   {path: 'module-two', outlet: 'module-two-outlet', loadChildren: 'app/module-two/module-two.module#ModuleTwoModule'}
// ];

// Version with lazy loaded modules into single route outlet
// const routes: Routes = [
//   {path: '', redirectTo: '', pathMatch: 'full'},
//   {path: 'module-one', loadChildren: 'app/module-one/module-one.module#ModuleOneModule'},
//   {path: 'module-two', loadChildren: 'app/module-two/module-two.module#ModuleTwoModule'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
