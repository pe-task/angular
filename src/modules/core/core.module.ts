import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ApiService} from './services';

@NgModule({
  imports: [
    HttpModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
      providers: [
        ApiService
      ]
    };
  }
}
