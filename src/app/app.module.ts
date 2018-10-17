import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecondTestPageModule } from '../pages/second-test/second-test.module';
import { SecondTestPage } from '../pages/second-test/second-test';
import { ThirdTestPage } from '../pages/third-test/third-test';
import { FourthTestPage } from '../pages/fourth-test/fourth-test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SecondTestPage,
    ThirdTestPage,
    FourthTestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SecondTestPage,
    ThirdTestPage,
    FourthTestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
