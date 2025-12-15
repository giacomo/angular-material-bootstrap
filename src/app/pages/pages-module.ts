import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { MaterialModule } from '../material/material-module';
import { PagesRoutingModule } from './pages-routing-module';



@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
  ]
})
export class PagesModule { }
