import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { HashLocationStrategy, LocationStrategy,DatePipe} from "@angular/common";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule} from 'ng2-toastr/ng2-toastr';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import {WordCounter} from "./services/services.barrel"
const routes: Routes = [
 { 
    path: '',
    component:LayoutComponent,
    children:[
        { 
          path: '',
          redirectTo: 'main',
          pathMatch: 'full',
        },
        {
          path: 'main',
          loadChildren: './pages/starter/starter.module#StarterModule',
         }
      ]
    }
];

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WordCounter,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
