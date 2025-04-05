import { Component } from '@angular/core';
import { TranslocoService, TranslocoDirective } from "@jsverse/transloco";
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  imports: [NgFor, TranslocoDirective],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  //store the list of available languages and current language as strings 
  currentLang: string;
  langs: string[];

  constructor(private translocoService: TranslocoService) {
    // get current lang
    this.currentLang = this.translocoService.getActiveLang();

    // get available langs
    const availableLangs = this.translocoService.getAvailableLangs();
    //check if lang are provide as string or objact then handle accordingly
    if (Array.isArray(availableLangs) && typeof availableLangs[0] === 'string') {
      this.langs = availableLangs as string[];
    } else {
      this.langs = (availableLangs as { id: string; label: string }[]).map((lang) => lang.id);
    }
  }

  //change language
  onChange(event: Event): void {
    this.translocoService.setActiveLang((event.target as HTMLSelectElement).value);
  }

}
