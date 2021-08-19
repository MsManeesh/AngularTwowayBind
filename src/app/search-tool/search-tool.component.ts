import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.css']
})
export class SearchToolComponent implements OnInit {
  @Output() passValue=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  clicked(name:any){
    this.passValue.emit(name)
  }
}
