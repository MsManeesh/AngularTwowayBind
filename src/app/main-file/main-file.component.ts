import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-file',
  templateUrl: './main-file.component.html',
  styleUrls: ['./main-file.component.css']
})
export class MainFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {name:"Ajay",gender:"male",status:"single",salary:"20000",dob:"05/12/1996"},
    {name:"Arun",gender:"male",status:"married",salary:"35000",dob:"12/25/1992"},
    {name:"Ganga",gender:"female",status:"married",salary:"25000",dob:"05/12/1989"},
    {name:"Meera",gender:"female",status:"single",salary:"20000",dob:"05/12/1994"}
  ];
  list1:any[]=[];
  listDisplay(){
    this.list1=this.data;
  return this.list1;
  }
  out :any[]=[];
  searchDisplay(name:string):any{
    var lowername:string=name.toLocaleLowerCase();
    if(name!=""){
      this.data.forEach(element=>{
        if(element.name.toLowerCase()==lowername){
          this.out.push(element);
        }
      })
      return this.out;
    }
    
  }

}
