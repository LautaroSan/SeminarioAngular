import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsListComponent } from './materials-list/materials-list.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { FormsModule } from '@angular/forms';
import { CorralonMaterialsComponent } from './corralon-materials/corralon-materials.component';
import { CorralonAboutComponent } from './corralon-about/corralon-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsListComponent,
    CarroComprasComponent,
    CorralonMaterialsComponent,
    CorralonAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
