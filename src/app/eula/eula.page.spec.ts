import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EulaPage } from './eula.page';

describe('EulaPage', () => {
  let component: EulaPage;
  let fixture: ComponentFixture<EulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
