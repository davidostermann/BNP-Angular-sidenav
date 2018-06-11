
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNavComponent } from './super-nav.component';

describe('SuperNavComponent', () => {
  let component: SuperNavComponent;
  let fixture: ComponentFixture<SuperNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
