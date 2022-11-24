import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmoticonPage } from './emoticon.page';

const routes: Routes = [
  {
    path: '',
    component: EmoticonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmoticonPageRoutingModule {}
