import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ARasistenciaPage } from './arasistencia.page';

describe('ARasistenciaPage', () => {
  let component: ARasistenciaPage;
  let fixture: ComponentFixture<ARasistenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ARasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
