import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ShowHidePasswordComponent } from '../../components/show-hide-password/show-hide-password.component';
import { UpdatePasswordShowHideIconComponent } from '../../components/update-password-show-hide-icon/update-password-show-hide-icon.component';
import { HomeTabsComponent } from '../../components/home-tabs/home-tabs.component';

@NgModule({
  declarations: [ShowHidePasswordComponent, UpdatePasswordShowHideIconComponent, HomeTabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [ShowHidePasswordComponent, UpdatePasswordShowHideIconComponent, HomeTabsComponent],
})
export class SharedComponentModule { }