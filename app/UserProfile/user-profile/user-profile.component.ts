import { Component, OnInit, Inject, Input, NgModule } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { UserProfileService } from "../../services/user-profile.service";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { User } from "../../model/UserProfile";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "sn-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  email = sessionStorage.getItem("email");

counter:number = 0;

  uId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserProfileService
  ) {}
  ngOnInit() {
    this.getUserByEmail(this.email);
  }
  @Input() showMePartially: boolean;

  showVar: boolean = !true;
  toggleChild1() {
    this.showVar = !this.showVar;
  }

  user: User[][];
  testUser: any;

  getUserByEmail(email) {
    this.userService.getByEmail(email).subscribe(data => {
      this.user = Array.of(data);
      this.testUser = data;
      console.log("test data===" + this.testUser.password);
    });
  }

  forUpdateProfileCircle(email) {
    this.userService.getByEmail(email).subscribe(data => {
      this.user = Array.of(data);
      this.testUser = data;
      // console.log("test data===" + this.testUser.password);
      if(this.testUser.email !=null){
        this.counter+=1;
      }
      else if(this.testUser.uId !=null){
        this.counter+=1;
      }
      else if(this.testUser.password !=null){
        this.counter+=1;
      }
      else if(this.testUser.mobile !=null){
        this.counter+=1;
      }
      else if(this.testUser.location !=null){
        this.counter+=1;
      }
      else if(this.testUser.gender !=null){
        this.counter+=1;
      }
      else if(this.testUser.role !=null){
        this.counter+=1;
      }
      else if(this.testUser.email !=null){
        this.counter+=1;
      }

      else if(this.testUser.email !=null){
        this.counter+=1;
      }
      else if(this.testUser.email !=null){
        this.counter+=1;
      }
    });
  }
}