import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { comp1Component } from './components/comp1.component';
import {router} from './mod1.router';

@NgModule({
  declarations: [
    comp1Component
  ],
  imports: [
    CommonModule,
    router
  ],
  providers: [],
  bootstrap: []
})
export class mod1Module { }
