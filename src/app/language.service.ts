import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';
  constructor(private translate: TranslateService, private storage: Storage, private plt: Platform) { }

  setInitialAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    }); 
  }

  getLanguage(){
    return[
      //{ text: 'English', value: 'en', img: 'assets/imgs/flags/en.png'},
      //{ text: 'Thai', value: 'th', img: 'assets/imgs/flags/th.png'},
      //{ text: 'Japanese', value: 'jp', img: 'assets/imgs/flags/jp.png'},
      { text: 'English', value: 'en'},
      { text: 'Thai', value: 'th'}
      //{ text: 'Japanese', value: 'jp'}
    ];
  }

  setLanguage(lng){
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
