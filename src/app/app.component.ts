import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Habit Tracker';
}
