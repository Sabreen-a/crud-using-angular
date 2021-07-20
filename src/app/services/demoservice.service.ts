import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private ourClient:HttpClient,private location:Location) { }
  BaseUrl='http://localhost:3000/users';
  GetAllUsers(){
    return this.ourClient.get(this.BaseUrl);
  }
  GetAllUsersById(id:number){
    return this.ourClient.get(this.BaseUrl+"/"+id);
  }
  UpdateUserById(id:number,user:any){
    return this.ourClient.put(`${this.BaseUrl}/${id}`,user);
  }
  AddNewUser(user:any){
    return this.ourClient.post(this.BaseUrl,user);
    //this.location.back();
     
  }
  DeleteUser(id:number){
    return this.ourClient.delete(`${this.BaseUrl}/${id}`);
  }

}
