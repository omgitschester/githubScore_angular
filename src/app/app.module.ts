import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <— Import
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ScoreService } from './score.service'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
