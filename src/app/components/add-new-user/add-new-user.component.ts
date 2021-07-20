import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DemoserviceService } from 'src/app/services/demoservice.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styles: [
  ]
})

export class AddNewUserComponent implements OnInit {
  users:any;
  @ViewChild ('name')ele :any;
  myvalidation=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+//.[a-z]{2,4}$")]),
    phone:new FormControl("",[Validators.min(11),Validators.max(11)])
   
  })
  constructor(private myservice:DemoserviceService,private router:Router) {
    this.users={id:0,name:'',phone:'',email:''};
   }

  ngOnInit(): void {
    
  }
 
  Add(){
   
    
    return this.myservice.AddNewUser(this.users).subscribe(
      (res)=>{this.router.navigate(['users']),this.users=res},
      (err)=>{console.log(err)}
    )
 
  }
  get getnamevalid(){
    return this.myvalidation.controls.name.valid;
  }
  get getphonevalid(){
    return this.myvalidation.controls.phone.valid;
  }
   get getemailvalid(){
     return this.myvalidation.controls.email.valid;
   }
}
