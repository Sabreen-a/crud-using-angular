import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoserviceService } from 'src/app/services/demoservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [
  ]
})
export class DeleteComponent implements OnInit {
  id:number=0;
  constructor(ac:ActivatedRoute,private myservice:DemoserviceService,private router:Router) {
  this.id=ac.snapshot.params["id"];
}
  ngOnInit(): void {
    this.myservice.DeleteUser(this.id).subscribe(
      (res)=>this.router.navigate(['users']),
      (err)=>console.log(err)
    );
  }


}
