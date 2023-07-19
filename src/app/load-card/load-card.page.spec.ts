import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadCardPage } from './load-card.page';

describe('LoadCardPage', () => {
  let component: LoadCardPage;
  let fixture: ComponentFixture<LoadCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoadCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
