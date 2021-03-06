import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { AgmCoreModule } from '@agm/core';
import { MenuComponent } from './menu/menu.component';
import { CitylistComponent } from './citylist/citylist.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { UploadComponent } from './upload/upload.component';
import { CompareComponent } from './compare/compare.component';
import { DownloadComponent } from './download/download.component';
import { NewcityreqComponent } from './newcityreq/newcityreq.component';
import { NewfeaturereqComponent } from './newfeaturereq/newfeaturereq.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryListComponent,
    MenuComponent,
    CitylistComponent,
    AboutComponent,
    HelpComponent,
    UploadComponent,
    CompareComponent,
    DownloadComponent,
    NewcityreqComponent,
    NewfeaturereqComponent,
    FileSelectDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAP-MeUAQ9HwKvdFG-09XmwLu-ySDBl_tg"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
