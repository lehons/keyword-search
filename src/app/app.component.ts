import {AfterViewInit,Renderer2, Component,OnDestroy, OnInit, ViewContainerRef} from "@angular/core";
import {Http,Headers} from "@angular/http";
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';


  @Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnDestroy {
 
  activeToast:Toast;
  t:any;
  constructor(private toast: ToastsManager
  ) { 
  }
  
 ngOnDestroy(){
    
  }
  ngOnInit() {
   
  }
}
