import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmoticonPageRoutingModule } from './emoticon-routing.module';

import { EmoticonPage } from './emoticon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmoticonPageRoutingModule
  ],
  declarations: [EmoticonPage]
})
export class EmoticonPageModule {}
