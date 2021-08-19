import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { NameLengthPipe, NameTitlePipe } from './name-title.pipe';
import { Main1Component } from './main1/main1.component';
import { ChildComponent } from './child/child.component';
import { MainFileComponent } from './main-file/main-file.component';
import { SearchToolComponent } from './search-tool/search-tool.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    NameTitlePipe,
    NameLengthPipe,
    Main1Component,
    ChildComponent,
    MainFileComponent,
    SearchToolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
