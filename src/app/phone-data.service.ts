import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  constructor() { 

  }

  //Use Array Data Not Firebase to make app run faster than 5 sec.
  getPhoneData(){
    return[
      { text:'Police Station',phone:'tell:191',phoneText:'191',img:'assets\img\police.jpg'},
      { text:'Fire Station',phone:'tell:199',phoneText:'199',img:'assets\img\firerescue.png'},
      { text:'Emegency Medical',phone:'tell:1669',phoneText:'1669',img:'assets\img\medical.png'},
      { text:'Rural Roads',phone:'tell:1146',phoneText:'1146',img:'assets\img\drr-log.png'},
      { text:'Tourist Police',phone:'tell:1155',phoneText:'1155',img:'assets\img\touristpolice.png'},
      { text:'Car Missing',phone:'tell:1192',phoneText:'1192',img:'assets\img\carmissing.png'},
      { text:'Highway Police',phone:'tell:1193',phoneText:'1193',img:'assets\img\highwaypolice.png'},
      { text:'Marine Police',phone:'tell:1196',phoneText:'1196',img:'assets\img\marinepolice.png'},
      { text:'Traffic Police',phone:'tell:1197',phoneText:'1197',img:'assets\img\trafficpolice.png'},
      { text:'Expressway Authority',phone:'tell:1543',phoneText:'1543',img:'assets\img\exat.png'},
      { text:'Anti-Trafficking In Persons Division',phone:'tell:1191',phoneText:'1191',img:'assets\img\atpd.png'},
      { text:'Missing Person',phone:'tell:1599',phoneText:'1599',img:'assets\img\missingperson.jpg'}
    ];
  }





}
