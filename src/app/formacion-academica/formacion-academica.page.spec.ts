import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormacionAcademicaPage } from './formacion-academica.page';

describe('FormacionAcademicaPage', () => {
  let component: FormacionAcademicaPage;
  let fixture: ComponentFixture<FormacionAcademicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormacionAcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
