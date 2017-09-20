import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { CategoryData } from '../../providers/category-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  categories: any;

  constructor(
    public navCtrl: NavController,
    public catData: CategoryData
  ) {}

  ionViewDidLoad() {
    this.catData.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
