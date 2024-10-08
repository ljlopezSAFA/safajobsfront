import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuscadorPerfilesComponent } from './buscador-perfiles.component';

describe('BuscadorPerfilesComponent', () => {
  let component: BuscadorPerfilesComponent;
  let fixture: ComponentFixture<BuscadorPerfilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BuscadorPerfilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
