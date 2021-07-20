import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoserviceService } from 'src/app/services/demoservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//idd:number=0;
  constructor(private router:Router,private ouerService:DemoserviceService,private ActivRoute:ActivatedRoute,private loc:Location) { }
  users:any;
  result:any;
  data:any;
  item:any;
  id:number=0;
  ngOnInit(): void {
    this.fetchData();
    
  }
  fetchData() {
    this.ouerService.GetAllUsers().subscribe(
      (res)=>{this.users=res,console.log(res)},
      (err)=>console.log(err)
 
     );
    };
    
  delete(idd:number){
    this.result=confirm("do you sure to delet this user?");
    
     if(this.result==true){
      this.ouerService.DeleteUser(idd).subscribe(
        ()=>this.fetchData()
  
      );
     }else{
       alert('dlete this user has been cancelled');
     }
    
    
   

  }

}
