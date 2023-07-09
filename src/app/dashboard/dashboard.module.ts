import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { IncidenciaComponent } from './pages/incidencia/incidencia.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { IncidenciasTablaComponent } from './components/incidencias-tabla/incidencias-tabla.component';
import { IncidenciaDetallesTableComponent } from './components/incidencia-detalles-table/incidencia-detalles-table.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    SideMenuComponent,
    PedidosComponent,
    InventarioComponent,
    IncidenciaComponent,
    DevolucionesComponent,
    IncidenciasTablaComponent,
    IncidenciaDetallesTableComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
