import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoserviceService } from 'src/app/services/demoservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //id:number=0;
  user:any;
  @ViewChild('name') nm:any;
  @ViewChild('email') email:any;
  @ViewChild('phone') phone:any;
  constructor(private myservice:DemoserviceService,private router:Router,private activateroute:ActivatedRoute) { 
   
  }
   
  ngOnInit(): void {
  }
   
  Edit(name:string,email:string,phone:string){
    let users:{name:string,email:string,phone:string}={
      name:name,
      email:email,
      phone:phone
    };
    return this.myservice.UpdateUserById(this.activateroute.snapshot.params['id'],users).subscribe(
    (res)=>{this.router.navigate(['users']);console.log(this.user)},
    (err)=>{console.log(err)}

    );
    
  }
 
  
  ngAfterViewInit(): any {
    return this.myservice.GetAllUsersById(this.activateroute.snapshot.params['id']).
    subscribe(
      (data)=>{
        this.user=data,
        this.nm.nativeElement.value=this.user.name,
        this.email.nativeElement.value=this.user.email,
        this.phone.nativeElement.value=this.user.phone,
        console.log(data)},
      (err)=>console.log(err)
      );
    
    
  }
 

}
