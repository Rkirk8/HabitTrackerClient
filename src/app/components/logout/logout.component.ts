import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    // call logout on api and remove cookie w/jwt token redirect home after
    this.authService.logout().subscribe(Response => {
      //clear global username
      this.authService.clearUsername();
      //redirect to home
      this.router.navigate(['/']);
    })
  }
}
