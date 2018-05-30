import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LoginAuthService } from "../LoginAuth/login-auth.service";
import { Observable } from "rxjs/Observable";
import { LoginUserService } from "../services/login-user.service";
import { AuthenticationModel } from "../authentication.model";
import { UserService } from "../services/user.service";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {

  email: string;
  navbarUserId;

  authenticationModel: AuthenticationModel;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(
    private router: Router,
    private loginAuthService: LoginAuthService,
    private userService: LoginUserService,
    private us: UserService
  ) {}
  onLogout() {
    this.loginAuthService.logout();
  }
  isLoggedIn$: Observable<boolean>;
  ngOnInit() {
    //this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
    this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
   this.email=sessionStorage.getItem("useremail");

   console.log("email in navbar--->"+this.email);
   this.us.getUserByEmail(this.email)
   .subscribe(data1 => {
     console.log(data1)
     console.log("data in navbar-->>" + data1.userId + " " + data1.email );
     this.navbarUserId=data1.userId;
console.log("navbarUserId-->"+this.navbarUserId)
   })
  console.log("dhjdsjajhas==="+this.email);
  }
}




















//import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { LoginAuthService } from "../LoginAuth/login-auth.service";
// import { Observable } from "rxjs/Observable";
// import { LoginUserService } from "../services/login-user.service";
// import { AuthenticationModel } from "../authentication.model";
// import { SearchService } from '../services/search.service';
// import { Game } from '../model/game.model';
// import { FormControl } from '@angular/forms';


// @Component({
//   selector: "app-side-nav",
//   templateUrl: "./side-nav.component.html",
//   styleUrls: ["./side-nav.component.css"]
// })
// export class SideNavComponent implements OnInit {
//   authenticationModel: AuthenticationModel;
//   private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
//     false
//   );


//   games: Game[];
//   gameId: number;
//   gameName: string = '';
//   gameType: string = '';
//   gameImage: string = '';
//   gameDescription: string;
//   searchTerm: FormControl = new FormControl();

//   searchResult: any;
//   constructor(
//     private router: Router,
//     private loginAuthService: LoginAuthService,
//     private userService: LoginUserService,
//     private restService: SearchService){
//       this.searchTerm.
//         valueChanges
//         // .debounceTime(400)
//         .subscribe(data => {
//           this.restService.searchHeroes(data).subscribe(data => {
//             this.searchResult = data;
//             console.log(this.searchResult);
//             sessionStorage.setItem('searchdata', this.searchResult);
//           })
//         });
//     }
  
//   onLogout() {
//     this.loginAuthService.logout();
//   }
//   isLoggedIn$: Observable<boolean>;
//   ngOnInit() {
//     this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
//   }
// }