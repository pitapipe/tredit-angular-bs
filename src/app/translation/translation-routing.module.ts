import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslationComponent } from './translation.component';

const routes: Routes = [
  {
    path: 'translations',
    component: TranslationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslationRoutingModule { }
