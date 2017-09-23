// event-service.ts
/**
 * Class to facilitate event based communication within the app by availing subjects/topics and subscribers
 */

import {Injectable} from "@angular/core";
import * as Rx from "rxjs/Rx";


@Injectable()
export class WordCounter {
  input: String="";
  keywords:Array<any>=[];
  constructor() {
  }
  keywordCounter(keyword){
    var regExp = new RegExp(keyword, "gi");
    var count = (this.input.match(regExp) || []).length;
    return(count);
  }
   
}
