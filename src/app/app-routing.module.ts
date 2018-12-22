import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuhtGuardService } from './services/auht-guard.service';
const ROUTES: Routes = [
		{ path: 'home', component: HomeComponent },
		{ path: 'precios', component: PreciosComponent },
		{ 
			path: 'protegido', 
			component: ProtegidoComponent,
			canActivate: [ AuhtGuardService ] },
		{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
