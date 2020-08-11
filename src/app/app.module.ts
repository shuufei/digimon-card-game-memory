import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule  } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExitBarComponent } from './components/exit-bar/exit-bar.component';
import { MemoryControllerComponent } from './components/memory-controller/memory-controller.component';
import { MemoryComponent } from './components/memory/memory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { YourTurnLabelComponent } from './components/your-turn-label/your-turn-label.component';

@NgModule({
  declarations: [
    AppComponent,
    ExitBarComponent,
    MemoryControllerComponent,
    MemoryComponent,
    YourTurnLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
