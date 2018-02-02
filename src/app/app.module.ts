import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NetworkService } from './network-service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
