import { Component, AfterViewInit,OnInit } from '@angular/core';
import {WordCounter} from "../../services/services.barrel"
import { WygEditorComponent } from 'ng-wysiwygjs';

declare var $:any;
@Component({
	templateUrl: './starter.component.html',
	styleUrls:["./starter.component.css"],
})
export class StarterComponent {
	
	keyword:String;
	constructor(public wordCounter:WordCounter) {
		 
	}
	addKeyword(){
		if(this.keyword){
			let keys= this.keyword.split('\n'); 
			keys.forEach(k=>{
				this.wordCounter.keywords.push(k);				
			})
			this.keyword='';
		}
	}

	clear(){
		this.wordCounter.input ="";
		this.wordCounter.keywords = [];
	}
}