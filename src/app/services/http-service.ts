// http-service.ts
/**
 * This service will serve to facilitate communication between app views and the web services
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { UUID } from 'angular2-uuid';
import {Router} from '@angular/router';
import {EventsService} from './events-service';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class HttpService { 
  baseUrl = '';
  activeToast: Toast;
  token: String;
  constructor(private router: Router, private http: Http, private events: EventsService, private toast: ToastsManager) {
  }
  get headers(): Headers {
    const header = new Headers();
    var authToken = localStorage.getItem('authToken');
     header.append('TOKEN', authToken); 
     this.token=authToken;
    return header;
  }  
}
