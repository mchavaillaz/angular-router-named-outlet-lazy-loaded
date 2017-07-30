import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComponentOneComponent} from './component-one/component-one.component';

const routes: Routes = [
  {path: '', component: ComponentOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule {
}
