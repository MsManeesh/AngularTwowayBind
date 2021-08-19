import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

list1=[
  {name:"Ajay",gender:"male",status:"single",salary:"20000",dob:"05/12/1996"},
  {name:"Arun",gender:"male",status:"married",salary:"35000",dob:"12/25/1992"},
  {name:"Ganga",gender:"female",status:"married",salary:"25000",dob:"05/12/1989"},
  {name:"Meera",gender:"female",status:"single",salary:"20000",dob:"05/12/1994"}
];

}
