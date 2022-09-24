import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorralonAboutComponent } from './corralon-about/corralon-about.component';
import { CorralonMaterialsComponent } from './corralon-materials/corralon-materials.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'materials',
    pathMatch:'full'
  },
  {
    path:'materials', 
    component: CorralonMaterialsComponent
  },
  {
    path:'about',
    component: CorralonAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
