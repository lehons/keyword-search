import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate,CanActivateChild, Router} from "@angular/router";

import {HttpService} from "../services/http-service";
import {EventsService} from "../services/events-service";
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/first' // in imports

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{

  constructor(private http:HttpService,private events: EventsService,private router: Router) {
     
    
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
      return this.isLoggedIn.map(e => {
          if (e) {
             return true; 
          }else {
            this.router.navigate(['/auth']);
            return false;
          }
        }).catch((e) => { 
            this.router.navigate(['/auth']);
            return Observable.of(false);
        });      
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return Observable.of(true);
    }
    get isLoggedIn():Observable<boolean>{  
      return Observable.of(true)       
    }    
}