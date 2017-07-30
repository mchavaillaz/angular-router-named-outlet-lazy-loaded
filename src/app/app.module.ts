import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentModuleOneProxyComponent} from './component-module-one-proxy/component-module-one-proxy.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentModuleOneProxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
