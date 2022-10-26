import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  public viewData : any;
  newuser:any

  editFname="";
  editLname="";
  editEmail="";
  editCity="";
  editAddress="";

 
  database:any = [
    {id:1,fname:"Ted James",lname:"john",place1:"Phoenix",city:"Arizona",address:"abc street",total:"1,699.89"},
    {id:2,fname:"Michelle Thompson",lname:"Antony",place1:"Encinitas",city:"California",address:"kbc lane 2",total:"1,235.66"},
    {id:3,fname:"Zed Bishop",lname:"JO",place1:"Seattle",city:"Washingtone",address:"ar lane",total:"2,846.56"},
    {id:4,fname:"Tina Adams",lname:"roy",place1:"Chandler",city:"Arizona",address:"house 4 ,123 street",total:"1,254.21"},
    {id:5,fname:"Igor Minar",lname:"tom",place1:"Dellas",city:"Texas",address:"lane 5",total:"1,547.58"},
    {id:6,fname:"Brad Green",lname:"smith",place1:"Ornaldo",city:"Florida",address:"1Atomic St",total:"2,5321.78"},
    {id:7,fname:"Misko Every",lname:"loother",place1:"Carey,North",city:"Carolina",address:"12 Ocean view",total:"4,873.21"},
    {id:8,fname:"Heady Wahlin",lname:"Marry",place1:"Anahem",city:"California",address:"346 credar Ave",total:"3,287.87"},
    {id:9,fname:"John papa",lname:"joy",place1:"Ornaldo",city:"Florida",address:"5468Jefferson way",total:"5,287.25"},
    {id:10,fname:"Toniya Smith",lname:"Adams",place1:"Atlanta",city:"Georgia",address:"78 manchester",total:"3,219.97"},    
  ]

  addnewuser(){
    this.database.push(this.newuser)
  }


}
