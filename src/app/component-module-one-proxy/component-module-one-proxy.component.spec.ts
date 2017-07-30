import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentModuleOneProxyComponent} from './component-module-one-proxy.component';

describe('ComponentModuleOneProxyComponent', () => {
  let component: ComponentModuleOneProxyComponent;
  let fixture: ComponentFixture<ComponentModuleOneProxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentModuleOneProxyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModuleOneProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
