import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() info:any;
  @Input() age:any;
  @Input() array:any;
  @Input() value1:any;
  @Output() onclick=new EventEmitter();
  @Output() firstClick=new EventEmitter();
  variable:string="";
  click(){
    this.onclick.emit(this.variable)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
