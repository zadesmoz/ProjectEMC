import { LanguageService } from '../language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  languages = [];
  selected = '';

  constructor(
    private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguage();
    this.selected = this.languageService.selected;
  }

  select(lng){
    this.languageService.setLanguage(lng);
  }

}
