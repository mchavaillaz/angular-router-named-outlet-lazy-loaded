import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleOneRoutingModule} from './module-one-routing.module';
import {ComponentOneComponent} from './component-one/component-one.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ],
  declarations: [ComponentOneComponent]
})
export class ModuleOneModule {
}
