import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsListComponent } from './materials-list/materials-list.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsListComponent,
    CarroComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
