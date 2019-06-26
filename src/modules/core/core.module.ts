import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ApiService} from './services';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
}
