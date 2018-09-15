import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListDetailComponent } from './list-detail/list-detail.component';


const routes: Routes = [
{ path: '', redirectTo:'/home', pathMatch: 'full'},
{ path: 'detail/:id', component: ListDetailComponent},
{ path: 'list', component: ListComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'home' , component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
 }

