import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuInferiorComponent } from './menu-inferior.component';

describe('MenuInferiorComponent', () => {
  let component: MenuInferiorComponent;
  let fixture: ComponentFixture<MenuInferiorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuInferiorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
