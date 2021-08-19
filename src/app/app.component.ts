import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string='';
  text : string='';
  onclick(my: { value: any; }){
      console.log(my.value);
  }
  products=[
    {name:"TV",price:"20000",spec:"LCD",img:"assets/tv.jpg"},
    {name:"LapTop",price:"50000",spec:"i5",img:"assets/laptop.jpg"},
    {name:"Fridge",price:"24000",spec:"DobleDoor",img:"assets/fridge.jpg"},
    {name:"Smart Phone",price:"25000",spec:"5G",img:"assets/mobile.jpg"}
  ];
  status : string='none';
}
