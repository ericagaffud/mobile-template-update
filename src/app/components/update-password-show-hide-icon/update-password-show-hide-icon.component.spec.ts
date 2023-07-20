import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatePasswordShowHideIconComponent } from './update-password-show-hide-icon.component';

describe('UpdatePasswordShowHideIconComponent', () => {
  let component: UpdatePasswordShowHideIconComponent;
  let fixture: ComponentFixture<UpdatePasswordShowHideIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordShowHideIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePasswordShowHideIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
