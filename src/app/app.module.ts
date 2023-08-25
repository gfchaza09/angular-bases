import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './components/counter/counter.module';
import { HeroesModule } from './components/heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
