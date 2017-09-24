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
import { StarterComponent } from './pages/starter/starter.component';
import { WordCounterComponent } from './pages/starter/word-counter.component';
import { WygEditorModule } from 'ng-wysiwygjs';

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
          component: StarterComponent
        }
      ]
    }
];

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent,StarterComponent,WordCounterComponent
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
    RouterModule.forRoot(routes),
		WygEditorModule
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
