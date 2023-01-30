import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallbackPipe } from './callback.pipe';
import { PremiovePipe } from './premiove.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    CallbackPipe,
    PremiovePipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallbackPipe,
    PremiovePipe,
    SearchPipe
  ]
})
export class ApplicationPipesModuleModule { }
