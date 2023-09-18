import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConocimientoPage } from './conocimiento.page';

describe('ConocimientoPage', () => {
  let component: ConocimientoPage;
  let fixture: ComponentFixture<ConocimientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConocimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
