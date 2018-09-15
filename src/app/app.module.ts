import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { LiSearchComponent } from './li-search/li-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    ContactComponent,
    ListDetailComponent,
    LiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation : false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
