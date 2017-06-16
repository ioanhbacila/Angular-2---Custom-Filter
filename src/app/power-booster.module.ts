import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PowerBoosterComponent } from './power-booster.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [
    PowerBoosterComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PowerBoosterComponent]
})
export class PowerBoosterModule { }
