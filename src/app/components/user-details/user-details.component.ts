import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoserviceService } from 'src/app/services/demoservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  id:number=0;
  users:any;
  constructor(private myService:DemoserviceService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.myService.GetAllUsersById(this.id).subscribe(
      (res)=>this.users=res,
      (err)=>console.log(err)
    );
    console.log(this.users);
  }

}
