import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryListComponent } from './entry-list/entry-list.component'
import { MenuComponent } from './menu/menu.component';
import { CitylistComponent } from './citylist/citylist.component';
import { AboutComponent } from './about/about.component';
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
    {path: 'about/menu', redirectTo: '/menu', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
