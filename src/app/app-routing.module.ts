import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryListComponent } from './entry-list/entry-list.component'
import { MenuComponent } from './menu/menu.component';
import { CitylistComponent } from './citylist/citylist.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { UploadComponent } from './upload/upload.component';
import { CompareComponent } from './compare/compare.component';
import { DownloadComponent } from './download/download.component';
import { NewcityreqComponent } from './newcityreq/newcityreq.component';
import { NewfeaturereqComponent } from './newfeaturereq/newfeaturereq.component';
const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'entrylist', component: EntryListComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'menu/home', redirectTo: '/home', pathMatch: 'full'},
    {path: 'citylist', component: CitylistComponent},
    {path: 'menu/citylist', redirectTo: '/citylist', pathMatch: 'full'},
    {path: 'citylist/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'menu/about', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'help', component: HelpComponent},
    {path: 'menu/help', redirectTo: '/help', pathMatch: 'full'},
    {path: 'help/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'upload', component: UploadComponent},
    {path: 'menu/upload', redirectTo: '/upload', pathMatch: 'full'},
    {path: 'upload/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'compare', component: CompareComponent},
    {path: 'menu/compare', redirectTo: '/compare', pathMatch: 'full'},
    {path: 'compare/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'download', component: DownloadComponent},
    {path: 'menu/download', redirectTo: '/download', pathMatch: 'full'},
    {path: 'download/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'newcityreq', component: NewcityreqComponent},
    {path: 'menu/newcityreq', redirectTo: '/newcityreq', pathMatch: 'full'},
    {path: 'newcityreq/menu', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'newfeaturereq', component: NewfeaturereqComponent},
    {path: 'menu/newfeaturereq', redirectTo: '/newfeaturereq', pathMatch: 'full'},
    {path: 'newfeaturereq/menu', redirectTo: '/menu', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
