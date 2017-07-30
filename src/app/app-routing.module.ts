import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'module-one', loadChildren: 'app/module-one/module-one.module#ModuleOneModule'},
  { path: 'module-two', loadChildren: 'app/module-two/module-two.module#ModuleTwoModule'}
];

// Lazy loaded modules in routes
// const routes: Routes = [
//   { path: '', redirectTo: '', pathMatch: 'full' },
//   { path: 'module-one', outlet: 'module-one-outlet', loadChildren: 'app/module-one/module-one.module#ModuleOneModule'},
//   { path: 'module-two', outlet: 'module-two-outlet', loadChildren: 'app/module-two/module-two.module#ModuleTwoModule'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
