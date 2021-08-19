import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {
 name: string="Vishnu";
 msg:string="";
 age: number=25;
 array=[
   {name:"user1",age:"26"},
   {name:"user1",age:"26"},
   {name:"user1",age:"26"},
   {name:"user1",age:"26"}
 ]
 childvalue:string="";
 childReplay(msg:any){
   this.childvalue=msg;
 }
 response(){
   this.childvalue="Start Writing.........."
 }
  constructor() { }

  ngOnInit(): void {
  }

}
