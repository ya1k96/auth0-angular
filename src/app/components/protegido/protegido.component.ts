import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth0.service';
@Component({
  selector: 'app-protegido',
  templateUrl: './protegido.component.html',
  styles: []
})
export class ProtegidoComponent implements OnInit {
	profile: any;
  constructor(private auth:Auth0Service) { }

  
  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
