import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  imports: [CommonModule, BrowserModule],
})
export class CounterModule {}
