import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WbPage } from '../pages/wb/wb';
import { WbDetailPage } from '../pages/wb-detail/wb-detail';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { WbData } from '../providers/wb-data';
import { NewsData } from '../providers/news-data';
import { CategoriesData } from '../providers/categories-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WbPage,
    WbDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: WbPage, name: 'Wb', segment: 'wb' },
        { component: WbDetailPage, name: 'WbDetailPage', segment: 'wbDetail/:wbId' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WbPage,
    WbDetailPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    CategoriesData,
    WbData,
    NewsData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
