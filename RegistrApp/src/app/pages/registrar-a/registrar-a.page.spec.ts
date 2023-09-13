import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAPage } from './registrar-a.page';

describe('RegistrarAPage', () => {
  let component: RegistrarAPage;
  let fixture: ComponentFixture<RegistrarAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
