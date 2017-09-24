import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { WordCounterComponent } from './word-counter.component';
import { WygEditorModule } from 'ng-wysiwygjs';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Starter page',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Starter page'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
		RouterModule.forChild(routes),
		WygEditorModule
    ],
	declarations: [StarterComponent,WordCounterComponent]
})
export class StarterModule { }