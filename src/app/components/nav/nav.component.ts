import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  username: string | null = null;

  constructor(public authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.username.subscribe(username => {
      this.username = username
    });
  }
}
