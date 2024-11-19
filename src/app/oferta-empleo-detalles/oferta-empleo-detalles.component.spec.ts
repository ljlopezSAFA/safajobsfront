import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertaEmpleoDetallesComponent } from './oferta-empleo-detalles.component';

describe('OfertaEmpleoDetallesComponent', () => {
  let component: OfertaEmpleoDetallesComponent;
  let fixture: ComponentFixture<OfertaEmpleoDetallesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaEmpleoDetallesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertaEmpleoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
