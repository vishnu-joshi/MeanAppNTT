import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryListComponent,
    
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
