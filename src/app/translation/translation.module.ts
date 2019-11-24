import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationRoutingModule } from './translation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslationComponent } from './translation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TranslationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    TranslationRoutingModule]
})
export class TranslationModule { }
