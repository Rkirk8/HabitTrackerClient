import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoService, translocoConfig, TranslocoModule, TranslocoLoader, Translation } from '@jsverse/transloco';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';

@Component({
  selector: 'app-home',
  imports: [TranslocoDirective, TranslocoModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
