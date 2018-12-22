import { Injectable } from '@angular/core';
import { 	
	Router, 
	ActivatedRouteSnapshot, 
	RouterStateSnapshot, 
	CanActivate	  
} from '@angular/router';
import { Auth0Service } from './auth0.service';
@Injectable({
  providedIn: 'root'
})
export class AuhtGuardService implements CanActivate {

  constructor(private auth: Auth0Service) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
  	return this.auth.isAuthenticated();
  }
}
