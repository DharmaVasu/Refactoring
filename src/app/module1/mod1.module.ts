import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";


import { comp1Component } from './components/comp1.component';
import { router } from './mod1.router';
import { modService } from './services/mod1.service';

@NgModule({
  declarations: [
    comp1Component
  ],
  imports: [
    CommonModule,
    HttpModule,
    router
  ],
  providers: [modService],
  bootstrap: []
})
export class mod1Module { }
