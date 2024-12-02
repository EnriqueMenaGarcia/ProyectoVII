import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './compras/compras.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { PromocionesComponent } from './promociones/promociones.component';



export const routes: Routes = [

  RouterModule.forRoot([
    { path:'inicio', component: InicioComponent},
    { path:'compras', component: ComprasComponent},
    { path:'catalogos', component: CatalogosComponent},
    { path:'promociones', component: PromocionesComponent}
  ])
  ];
