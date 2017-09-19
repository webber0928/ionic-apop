import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsData } from '../../providers/news-data';

@IonicPage({
  segment: 'speaker/:wbId'
})
@Component({
  selector: 'page-wb-detail',
  templateUrl: 'wb-detail.html'
})

export class WbDetailPage {
  speaker: any;

  constructor(protected _sanitizer: DomSanitizer, public dataProvider: NewsData, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewWillEnter() {
    console.log('L20', this.navParams.data.wbId)
    this.dataProvider.load(this.navParams.data.wbId).subscribe((data: any) => {
      this.speaker = data;
      this._sanitizer.bypassSecurityTrustHtml(this.speaker.content);
    });

  }

  goToSessionDetail(session: any) {
    console.log(session.id, 'L36')
    this.navCtrl.push('SessionDetailPage', { wbId: session.id });
  }
}