import { Component, AfterViewInit,OnInit,Input } from '@angular/core';
import {WordCounter} from "../../services/services.barrel"

declare var $:any;
@Component({
	selector:'counter',
	template: `<span> &nbsp;{{count}} </span>`
})
export class WordCounterComponent implements OnInit {
    @Input() word:String;	
	constructor(public wordCounter:WordCounter) { 
        
	}
    get count(){
        return this.wordCounter.keywordCounter(this.word);
    }
	ngOnInit(){ 

	}
}