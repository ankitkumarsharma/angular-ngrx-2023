import { LoaderInterceptor } from './core/helpers/interceptors/loader/loader.interceptor';
import { HeaderInterceptor } from './core/helpers/interceptors/header/header.interceptor';
import { metaReducers, reducers } from './core/state/reducers/index';
import { Effects } from './core/state/effects/index';
import { environment } from './../environments/environment';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { ErrorHandleInterceptor } from './core/helpers/interceptors/error/error-handle.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoaderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule,
    ToastrModule.forRoot(
      {
       timeOut: 1000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true,
       easeTime: 3000,
       extendedTimeOut: 3000
      }
    )
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: ErrorHandler, useClass: ErrorHandleInterceptor},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
