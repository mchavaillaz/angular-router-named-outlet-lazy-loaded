import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleTwoRoutingModule} from './module-two-routing.module';
import {ComponentTwoComponent} from './component-two/component-two.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ],
  declarations: [ComponentTwoComponent]
})
export class ModuleTwoModule {
}
