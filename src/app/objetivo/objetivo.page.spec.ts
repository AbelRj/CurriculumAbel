import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjetivoPage } from './objetivo.page';

describe('ObjetivoPage', () => {
  let component: ObjetivoPage;
  let fixture: ComponentFixture<ObjetivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjetivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
