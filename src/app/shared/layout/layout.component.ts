import {Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit} from "@angular/core";
import {Router,NavigationEnd} from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  
  @ViewChild('toastContainer', { read: ViewContainerRef }) toastVcr: ViewContainerRef;
  constructor(
    private router: Router, 
    private toast: ToastsManager
  ) {

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.toast.setRootViewContainerRef(this.toastVcr);
  }

}
