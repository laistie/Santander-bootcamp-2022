import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      },
      {
        path: 'products', component: ItemsListComponent
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
