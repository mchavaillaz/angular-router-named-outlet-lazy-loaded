import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComponentTwoComponent} from './component-two/component-two.component';

const routes: Routes = [
  {path: '', component: ComponentTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule {
}
