import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExample2Component } from './routing-example-2.component';

describe('RoutingExample2Component', () => {
  let component: RoutingExample2Component;
  let fixture: ComponentFixture<RoutingExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingExample2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
